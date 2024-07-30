import { getSearchParams } from 'components/utils/query';
import { isDev } from 'constants/env';
import { isEmpty, isString, isUndefined } from 'lodash';
import { useMemo } from 'react';
import { useRoute } from 'wouter';

const routeInstance = new Map<string, Router<any, any>>();

type ParamPart = { param: string };
type Part = string | ParamPart;

type ExtractParamName<T extends ReadonlyArray<Part>> = {
  [K in keyof T]: T[K] extends ParamPart ? T[K]['param'] : never;
}[number];

type ParamNameArray<P extends ReadonlyArray<Part>> = ExtractParamName<P>[];

export class Router<RouterParts extends ReadonlyArray<Part>, RouterQuery extends ReadonlyArray<string>> {
  static BasePath: string = '/';

  static create(...params: ConstructorParameters<typeof Router>) {
    return new Router(...params);
  }

  public readonly path: string;

  private readonly params: ParamNameArray<RouterParts>;

  constructor(
    private readonly parts: RouterParts,
    private readonly query?: RouterQuery,
  ) {
    this.path = this.buildPath();
    this.params = this.buildParams();

    if (routeInstance.has(this.path) && isDev()) {
      throw new Error(`Route ${this.path} already exists`);
    }

    routeInstance.set(this.path, this);
  }

  public readonly useMatch = (): boolean => {
    return useRoute(this.path)[0];
  };

  public readonly useRoute = () => {
    const [match, params] = useRoute(this.path);
  };

  public readonly useQuery = () => {
    return useMemo(() => {
      return getSearchParams();
    }, [window.location.search]);
  };

  public readonly navigate = (
    query?: {
      [QueryKey in RouterQuery[number]]?: string;
    },
    params?: {
      [ParamKey in ExtractParamName<RouterParts>]: string;
    },
  ) => {
    const url = this.url(query, params);
    if (isDev()) {
      console.info('Navigate route to', url);
    }

    const callbackRef: { callback?: Function } = {};
    setTimeout(() => {
      window.history.pushState(null, '', url);
      callbackRef.callback?.();
    }, 0);

    return {
      then: (callback: Function) => {
        callbackRef.callback = callback;
      },
    };
  };

  public readonly url = (
    query?: {
      [QueryKey in RouterQuery[number]]?: string;
    },
    params?: {
      [ParamKey in ExtractParamName<RouterParts>]: string;
    },
  ) => {
    if (this.params?.length) {
      if (!params) {
        throw new Error('Missing params');
      }
    }

    const urlPathList = this.parts
      .map((part) => (isString(part) ? part : params?.[part.param as ExtractParamName<RouterParts>]))
      .join('/');
    const url = this.joinWithBasePath(urlPathList);

    if (!this.query?.length || !query || isEmpty(query)) {
      return `${url}${window.location.search}`;
    }

    const search = new URLSearchParams({ ...getSearchParams(), ...query }).toString();
    return `${url}?${search}`;
  };

  public readonly isCurrent = () => {
    return window.location.pathname === this.path;
  };

  private readonly buildPath = (pathList?: string) => {
    pathList = isUndefined(pathList)
      ? this.parts.map((part) => (isString(part) ? part : `:${part.param}`)).join('/')
      : pathList;
    return `${Router.BasePath}${pathList}`.replaceAll('//', '/');
  };

  private readonly buildParams = () => {
    return this.parts
      .filter((part): part is ParamPart => !isString(part))
      .map((part) => part.param) as ParamNameArray<RouterParts>;
  };

  private readonly joinWithBasePath = (path: string) => {
    return `${Router.BasePath}${path}`.replaceAll('//', '/');
  };
}
