import { ApolloLink, FetchResult, GraphQLRequest } from 'apollo-link';
import { ExecutionResult } from 'graphql';
import { ApolloCache, DataProxy } from 'apollo-cache';
import { QueryManager } from './core/QueryManager';
import { ApolloQueryResult } from './core/types';
import { ObservableQuery } from './core/ObservableQuery';
import { Observable } from './util/Observable';
import { WatchQueryOptions, SubscriptionOptions, MutationOptions, ModifiableWatchQueryOptions, MutationBaseOptions } from './core/watchQueryOptions';
import { DataStore } from './data/store';
export interface DefaultOptions {
    watchQuery?: ModifiableWatchQueryOptions;
    query?: ModifiableWatchQueryOptions;
    mutate?: MutationBaseOptions;
}
export declare type ApolloClientOptions<TCacheShape> = {
    link: ApolloLink;
    cache: ApolloCache<TCacheShape>;
    ssrMode?: boolean;
    ssrForceFetchDelay?: number;
    connectToDevTools?: boolean;
    queryDeduplication?: boolean;
    defaultOptions?: DefaultOptions;
};
export default class ApolloClient<TCacheShape> implements DataProxy {
    link: ApolloLink;
    store: DataStore<TCacheShape>;
    cache: ApolloCache<TCacheShape>;
    queryManager: QueryManager<TCacheShape>;
    disableNetworkFetches: boolean;
    version: string;
    queryDeduplication: boolean;
    defaultOptions: DefaultOptions;
    private devToolsHookCb;
    private proxy;
    private ssrMode;
    constructor(options: ApolloClientOptions<TCacheShape>);
    watchQuery<T>(options: WatchQueryOptions): ObservableQuery<T>;
    query<T>(options: WatchQueryOptions): Promise<ApolloQueryResult<T>>;
    mutate<T>(options: MutationOptions<T>): Promise<FetchResult<T>>;
    subscribe(options: SubscriptionOptions): Observable<any>;
    readQuery<T>(options: DataProxy.Query): T | null;
    readFragment<T>(options: DataProxy.Fragment): T | null;
    writeQuery(options: DataProxy.WriteQueryOptions): void;
    writeFragment(options: DataProxy.WriteFragmentOptions): void;
    __actionHookForDevTools(cb: () => any): void;
    __requestRaw(payload: GraphQLRequest): Observable<ExecutionResult>;
    initQueryManager(): void;
    resetStore(): Promise<ApolloQueryResult<any>[]> | Promise<null>;
    reFetchObservableQueries(): Promise<ApolloQueryResult<any>[]> | Promise<null>;
    extract(optimistic?: boolean): TCacheShape;
    restore(serializedState: TCacheShape): ApolloCache<TCacheShape>;
    private initProxy();
}
