// 基本型別
interface UserRef {
    object: "user";
    id: string;
}

interface TextContent {
    type: "text";
    text: {
        content: string;
        link: null | string;
    };
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
    };
    plain_text: string;
    href: null | string;
}

// Properties 的型別
interface MultiSelectProperty {
    id: string;
    type: "multi_select";
    multi_select: {
        id: string;
        name: string;
        color: string;
    }[];
}

interface FilesProperty {
    id: string;
    type: "files";
    files: {
        name: string;
        type: "external";
        external: {
            url: string;
        };
    }[];
}

interface NumberProperty {
    id: string;
    type: "number";
    number: number;
}

interface UrlProperty {
    id: string;
    type: "url";
    url: string;
}

interface TextProperty {
    id: string;
    type: "text";
    text: TextContent[];
}

interface TitleProperty {
    id: string;
    type: "title";
    title: TextContent[];
}

interface DateProperty {
    id: string;
    type: "date";
    date: {
        start: string;
        end: null | string;
        time_zone: null | string;
    };
}

// Properties 型別合併
type PropertyTypes = MultiSelectProperty | FilesProperty | NumberProperty | UrlProperty | TextProperty | TitleProperty | DateProperty;
interface NotionPageProperties {
    Tags?: MultiSelectProperty
    Cover?: FilesProperty
    Sort?: NumberProperty
    Skill?: MultiSelectProperty
    GitHub?: UrlProperty
    ProjectImage?: FilesProperty
    Client?: TextProperty
    Link?: UrlProperty
    Text?: TextProperty
    Name?: TitleProperty
    Update?: DateProperty
}
export interface NotionPage {
    object: "page";
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: UserRef;
    last_edited_by: UserRef;
    cover: null;
    icon: null;
    parent: {
        type: "database_id";
        database_id: string;
    };
    archived: boolean;
    properties: NotionPageProperties;
    url: string;
    public_url: null | string;
}

export interface NotionDB {
    object: "list";
    results: NotionPage[],
    "next_cursor": null,
    "has_more": false,
    "type": "page_or_database",
    "page_or_database": {}
}
