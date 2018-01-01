/// <reference types="zen-observable" />
import { Operation, RequestHandler, NextLink, FetchResult } from '../types';
import * as Observable from 'zen-observable';
import { ApolloLink } from '../link';
export default class MockLink extends ApolloLink {
    constructor(handleRequest?: RequestHandler);
    request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null;
}
