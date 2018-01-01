import { DocumentNode, ExecutionResult } from 'graphql';
import { FetchResult } from 'apollo-link';
import { DataProxy } from 'apollo-cache';
import { MutationQueryReducersMap } from './types';
import { PureQueryOptions } from './types';
export declare type FetchPolicy = 'cache-first' | 'cache-and-network' | 'network-only' | 'cache-only' | 'standby';
export declare type ErrorPolicy = 'none' | 'ignore' | 'all';
export interface ModifiableWatchQueryOptions {
    variables?: {
        [key: string]: any;
    };
    pollInterval?: number;
    fetchPolicy?: FetchPolicy;
    errorPolicy?: ErrorPolicy;
    fetchResults?: boolean;
    notifyOnNetworkStatusChange?: boolean;
}
export interface WatchQueryOptions extends ModifiableWatchQueryOptions {
    query: DocumentNode;
    metadata?: any;
    context?: any;
}
export interface FetchMoreQueryOptions {
    query?: DocumentNode;
    variables?: {
        [key: string]: any;
    };
}
export declare type UpdateQueryFn = (previousQueryResult: Object, options: {
    subscriptionData: {
        data: any;
    };
    variables?: {
        [key: string]: any;
    };
}) => Object;
export declare type SubscribeToMoreOptions = {
    document: DocumentNode;
    variables?: {
        [key: string]: any;
    };
    updateQuery?: UpdateQueryFn;
    onError?: (error: Error) => void;
};
export interface SubscriptionOptions {
    query: DocumentNode;
    variables?: {
        [key: string]: any;
    };
}
export declare type RefetchQueryDescription = Array<string | PureQueryOptions>;
export interface MutationBaseOptions<T = {
    [key: string]: any;
}> {
    optimisticResponse?: Object | Function;
    updateQueries?: MutationQueryReducersMap<T>;
    refetchQueries?: ((result: ExecutionResult) => RefetchQueryDescription) | RefetchQueryDescription;
    update?: MutationUpdaterFn<T>;
    errorPolicy?: ErrorPolicy;
    variables?: any;
}
export interface MutationOptions<T = {
    [key: string]: any;
}> extends MutationBaseOptions<T> {
    mutation: DocumentNode;
    context?: any;
}
export declare type MutationUpdaterFn<T = {
    [key: string]: any;
}> = (proxy: DataProxy, mutationResult: FetchResult<T>) => void;
