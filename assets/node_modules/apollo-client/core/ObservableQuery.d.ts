import { GraphQLError } from 'graphql';
import { NetworkStatus } from './networkStatus';
import { Observable } from '../util/Observable';
import { QueryScheduler } from '../scheduler/scheduler';
import { ApolloError } from '../errors/ApolloError';
import { ApolloQueryResult } from './types';
import { ModifiableWatchQueryOptions, WatchQueryOptions, FetchMoreQueryOptions, SubscribeToMoreOptions, ErrorPolicy } from './watchQueryOptions';
import { QueryStoreValue } from '../data/queries';
export declare type ApolloCurrentResult<T> = {
    data: T | {};
    errors?: GraphQLError[];
    loading: boolean;
    networkStatus: NetworkStatus;
    error?: ApolloError;
    partial?: boolean;
};
export interface FetchMoreOptions {
    updateQuery: (previousQueryResult: {
        [key: string]: any;
    }, options: {
        fetchMoreResult?: {
            [key: string]: any;
        };
        variables: {
            [key: string]: any;
        };
    }) => Object;
}
export interface UpdateQueryOptions {
    variables?: Object;
}
export declare const hasError: (storeValue: QueryStoreValue, policy?: ErrorPolicy) => true | Error | null | undefined;
export declare class ObservableQuery<T> extends Observable<ApolloQueryResult<T>> {
    options: WatchQueryOptions;
    queryId: string;
    variables: {
        [key: string]: any;
    };
    private isCurrentlyPolling;
    private shouldSubscribe;
    private isTornDown;
    private scheduler;
    private queryManager;
    private observers;
    private subscriptionHandles;
    private lastResult;
    private lastError;
    private lastVariables;
    constructor({scheduler, options, shouldSubscribe}: {
        scheduler: QueryScheduler<any>;
        options: WatchQueryOptions;
        shouldSubscribe?: boolean;
    });
    result(): Promise<ApolloQueryResult<T>>;
    currentResult(): ApolloCurrentResult<T>;
    getLastResult(): ApolloQueryResult<T>;
    getLastError(): ApolloError;
    resetLastResults(): void;
    refetch(variables?: any): Promise<ApolloQueryResult<T>>;
    fetchMore(fetchMoreOptions: FetchMoreQueryOptions & FetchMoreOptions): Promise<ApolloQueryResult<T>>;
    subscribeToMore(options: SubscribeToMoreOptions): () => void;
    setOptions(opts: ModifiableWatchQueryOptions): Promise<ApolloQueryResult<T>>;
    setVariables(variables: any, tryFetch?: boolean, fetchResults?: boolean): Promise<ApolloQueryResult<T>>;
    updateQuery(mapFn: (previousQueryResult: any, options: UpdateQueryOptions) => any): void;
    stopPolling(): void;
    startPolling(pollInterval: number): void;
    private onSubscribe(observer);
    private setUpQuery();
    private tearDownQuery();
}
