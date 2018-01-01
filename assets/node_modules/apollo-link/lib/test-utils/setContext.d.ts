/// <reference types="zen-observable" />
import { Operation, NextLink, FetchResult } from '../types';
import * as Observable from 'zen-observable';
import { ApolloLink } from '../link';
export default class SetContextLink extends ApolloLink {
    private setContext;
    constructor(setContext?: (context: Record<string, any>) => Record<string, any>);
    request(operation: Operation, forward: NextLink): Observable<FetchResult>;
}
