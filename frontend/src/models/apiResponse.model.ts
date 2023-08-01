export interface ApiErrorResonse {
    status: number;
    data: {
        status: number;
        error: string;
        message: string;
        timestamp: Date;
    };
}
