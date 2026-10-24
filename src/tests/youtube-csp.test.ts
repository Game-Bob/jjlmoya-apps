import { describe, expect, it } from 'vitest';
import { isYouTubeFramePolicyViolation } from '../utils/youtube-csp';

describe('YouTube frame CSP recovery', () => {
    it.each(['frame-src', 'child-src', 'default-src'])(
        'recognizes %s violations for supported YouTube hosts',
        (effectiveDirective) => {
            expect(
                isYouTubeFramePolicyViolation({
                    effectiveDirective,
                    blockedURI: 'https://www.youtube-nocookie.com/embed/video-id',
                }),
            ).toBe(true);
            expect(
                isYouTubeFramePolicyViolation({
                    effectiveDirective,
                    blockedURI: 'https://www.youtube.com/embed/video-id',
                }),
            ).toBe(true);
        },
    );

    it('ignores non-frame policies and unrelated or unparseable hosts', () => {
        expect(
            isYouTubeFramePolicyViolation({
                effectiveDirective: 'img-src',
                blockedURI: 'https://www.youtube.com/image.webp',
            }),
        ).toBe(false);
        expect(
            isYouTubeFramePolicyViolation({
                effectiveDirective: 'frame-src',
                blockedURI: 'https://example.com/embed/video-id',
            }),
        ).toBe(false);
        expect(
            isYouTubeFramePolicyViolation({
                effectiveDirective: 'frame-src',
                blockedURI: 'inline',
            }),
        ).toBe(false);
    });
});
