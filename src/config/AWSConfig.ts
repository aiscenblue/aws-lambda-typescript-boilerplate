import {config} from "aws-sdk";

export enum AWSConfig {
    accessKeyId = "",
    secretAccessKey = "",
    region = ""
}

interface AWSConfigInterface {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
}

export default class AWSConfiguration {

    private _config: AWSConfigInterface = AWSConfig;

    constructor() {
        config.update(this.config);
    }

    get config(): AWSConfigInterface {
        return this._config;
    }

    set config(value: AWSConfigInterface) {
        this._config = value;
    }
}