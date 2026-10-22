export function ztreakPageUrl(basePath: string, page = ''): string {
    if (!basePath.startsWith('/') || basePath.startsWith('//') || /[?#]/.test(basePath)) throw new Error('Expected a local app base path');
    if (page && !/^[a-z0-9-]+(?:[/][a-z0-9-]+)*$/.test(page)) throw new Error('Invalid app page path');
    return basePath.replace(/[/]+$/, '') + '/' + (page ? page + '/' : '');
}
