import { Router } from 'components/Router/Router';

export const homeRoute = Router.create(['/'] as const);

/**
 * 音乐模块路由
 * @param musicRoute
 */
export const musicRoute = Router.create(['music'] as const);
export const musicRouteComponents = Router.create(['music/*'] as const);
export const musicFeaturedRoute = Router.create(['music/featured'] as const);
export const musicListenBookRoute = Router.create(['music/listen/book'] as const);
export const musicRankingRoute = Router.create(['music/ranking'] as const);
export const musicSingerRoute = Router.create(['music/singer'] as const);

/**
 * 视频模块路由
 * @param videoRoute
 */
export const videoRoute = Router.create(['video'] as const);

/**
 * 雷达模块路由
 * @param radarRoute
 */
export const radarRoute = Router.create(['radar'] as const);

/**
 * 喜欢模块路由
 * @param favoriteRoute
 */
export const favoriteRoute = Router.create(['favorite'] as const);

/**
 * 最近播放模块路由
 * @param recentRoute
 */
export const recentRoute = Router.create(['recent'] as const);

/**
 * 本地和下载模块路由
 * @param downloadRoute
 */
export const downloadRoute = Router.create(['download'] as const);

export const debugRoute = Router.create(['debug'] as const);
