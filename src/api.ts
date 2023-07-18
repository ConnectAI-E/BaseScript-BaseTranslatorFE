import { bitable, IOpenAttachment, FieldType, IWidgetTable } from "@base-open/web-api";
import { forceUpdateCom, getMoreConfig } from "./App";

const url = 'https://base-translator-api.replit.app/translate';

export const translate = async (sourceValueList: Array<any>, targetLang: string) => {
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            field_value_list: sourceValueList,
            target_lang: targetLang
        }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(json => { return json })
        .catch(err => console.error('error:' + err));
};
