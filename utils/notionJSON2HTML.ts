type notionBlock = {
    type: string;
    [key: string]: any;
};

type notionText = {
    type: string;
    text: {
        content: string;
        link: string | null;
    };
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
    };
};

function renderText(text: notionText): string {
    let content = text.text.content;

    // Handle annotations
    if (text.annotations.bold) content = `<strong>${content}</strong>`;
    if (text.annotations.italic) content = `<em>${content}</em>`;
    if (text.annotations.strikethrough) content = `<del>${content}</del>`;
    if (text.annotations.underline) content = `<u>${content}</u>`;
    if (text.annotations.code) content = `<code>${content}</code>`;

    // Handle link
    if (text.text.link) {
        content = `<a href="${text.text.link}">${content}</a>`;
    }

    return content;
}

export default function (block: notionBlock): string {
    switch (block.type) {
        case 'heading_1':
            return `<h1>${block.heading_1.text.map(renderText).join('')}</h1>`;
        case 'heading_2':
            return `<h2>${block.heading_2.text.map(renderText).join('')}</h2>`;
        case 'heading_3':
            return `<h3>${block.heading_3.text.map(renderText).join('')}</h3>`;
        case 'bulleted_list_item':
            return `<li>${block.bulleted_list_item.text.map(renderText).join('')}</li>`;
        case 'numbered_list_item':
            return `<li>${block.numbered_list_item.text.map(renderText).join('')}</li>`;
        case 'code':
            return `<pre><code>${block.code.text.map(renderText).join('')}</code></pre>`;
        case 'quote':
            return `<blockquote>${block.quote.text.map(renderText).join('')}</blockquote>`;
        case 'callout':
            return `<div class="callout">${block.callout.text.map(renderText).join('')}</div>`;
        case 'paragraph':
            return `<p>${block.paragraph.text.map(renderText).join('')}</p>`;
        case 'image':
            return `<div id="image-container" class="relative w-full pb-[56.25%] overflow-hidden">
                        <img src="${block.image.file.url}" alt=""/>
                    </div>`;
        default:
            return ``;
    }
}