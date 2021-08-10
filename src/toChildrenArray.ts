import React from 'react';

export interface Option {
    keepEmpty?: boolean;
}
/** 将children转为节点数组 */
export default function toChildrenArray(
    children: React.ReactNode,
    option: Option = {}
): React.ReactElement[] {
    let ret: React.ReactElement[] = [];

    React.Children.forEach(children, (child:any) => {

        if ((child === undefined || child === null) && !option.keepEmpty) {
            return;
        }

        if (Array.isArray(child)) {
            ret = ret.concat(toChildrenArray(child));
        } else {
            ret.push(child);
        }

    });

    return ret;
}