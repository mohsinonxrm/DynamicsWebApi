export interface DynamicsWebApiError extends Error {
    status: number;
}
export declare class ErrorHelper {
    static handleErrorResponse(req: any): void;
    static parameterCheck(parameter: any, functionName: string, parameterName: string, type?: string): void;
    static stringParameterCheck(parameter: any, functionName: string, parameterName: string): void;
    static arrayParameterCheck(parameter: any, functionName: string, parameterName: string): void;
    static stringOrArrayParameterCheck(parameter: any, functionName: string, parameterName: string): void;
    static numberParameterCheck(parameter: any, functionName: string, parameterName: string): void;
    static batchIsEmpty(): Error[];
    static handleHttpError(parsedError: any, parameters?: any): DynamicsWebApiError;
    static boolParameterCheck(parameter: any, functionName: string, parameterName: string): void;
    /**
     * Private function used to check whether required parameter is a valid GUID
     * @param parameter The GUID parameter to check
     * @param functionName
     * @param parameterName
     * @returns
     */
    static guidParameterCheck(parameter: any, functionName: string, parameterName: string): string | undefined;
    static keyParameterCheck(parameter: any, functionName: string, parameterName: string): string | undefined;
    static callbackParameterCheck(callbackParameter: any, functionName: string, parameterName: string): void;
    static throwBatchIncompatible(functionName: string, isBatch: boolean): void;
    static throwBatchNotStarted(isBatch: boolean): void;
}
//# sourceMappingURL=ErrorHelper.d.ts.map