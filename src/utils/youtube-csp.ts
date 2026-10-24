const frameDirectives = new Set(['frame-src', 'child-src', 'default-src']);

export function isYouTubeFramePolicyViolation(
    event: Pick<SecurityPolicyViolationEvent, 'effectiveDirective' | 'blockedURI'>,
): boolean {
    if (!frameDirectives.has(event.effectiveDirective)) return false;

    let blockedHost = '';
    try {
        blockedHost = new URL(event.blockedURI).hostname;
    } catch {
        return false;
    }

    return (
        blockedHost === 'youtube.com' ||
        blockedHost.endsWith('.youtube.com') ||
        blockedHost === 'youtube-nocookie.com' ||
        blockedHost.endsWith('.youtube-nocookie.com')
    );
}
