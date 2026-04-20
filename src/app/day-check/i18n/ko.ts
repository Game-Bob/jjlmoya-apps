import type { AppCardContent } from '../../../types';
import type { DayCheckLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'day-check',
    title: 'Day Check: 디데이 카운터',
    subtitle: '시간, 예술이 되다.',
    description:
        '우아하고 미니멀한 디자인으로 소중한 순간을 위한 카운트다운을 관리하세요. 휴가, 기념일 또는 목표: 매 단계를 소중하게 기록하세요.',
};

export const landingContent: DayCheckLandingContent = {
    hero: {
        badge: 'Day Check: 디데이 카운터',
        titleStart: '모든 ',
        titleItalic: '시간',
        titleEnd: '은 승리입니다.',
        subtitle:
            'Store에서 가장 우아한 도구로 목표를 시각화하고 당신의 기록을 축하하세요.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Play Store',
    },
    cards: {
        statusLabel: '상태: 긴급',
        ctaTitle: '지금 바로',
        ctaHighlight: 'Day Check: 디데이 카운터',
        ctaButton: '시작하기',
        daysLabel: '일',
        hoursLabel: '시간',
        minsLabel: '분',
        segsLabel: '초',
        sinceLabel: '시작일',
        targetLabel: '남은 시간',
        cards: [
            { label: '금연 일수', type: 'since', emoji: '\u2728', tag: '건강' },
            { label: '일본 여행', type: 'target', emoji: '\uD83C\uDF38', tag: '여행' },
            { label: '운동 기록', type: 'since', emoji: '\uD83D\uDD25', tag: '피트니스' },
        ],
    },
    benefits: {
        titleMain: '습관의 ',
        titleHighlight: '심리학.',
        description:
            'Day Check는 시각적 강화를 통해 규율을 자기 계발의 게임으로 바꿉니다. 매 순간은 당신의 노력을 증명합니다.',
        items: [
            {
                title: '카운트다운 및 카운트업',
                text: '중요한 날로부터 남은 시간(Count down) 또는 경과 시간(Count up)을 추적하세요.',
                icon: 'mdi:timer-sand',
            },
            {
                title: '네이티브 위젯',
                text: '우아하고 기능적인 위젯으로 홈 화면에서 항상 일정을 확인하세요.',
                icon: 'mdi:widgets',
            },
            {
                title: '글래스모피즘 디자인',
                text: '유리 효과, 블러, 생동감 넘치는 그라데이션이 어우러진 현대적인 인터페이스를 경험하세요.',
                icon: 'mdi:blur',
            },
            {
                title: '완벽한 개인정보 보호',
                text: '모든 데이터와 일정은 기기에만 저장됩니다. 당신의 삶은 보호받아야 합니다.',
                icon: 'mdi:shield-check',
            },
        ],
    },
    videos: {
        title: '실제 앱 화면',
    },
    footer: {
        badge: '지금 이용 가능',
        titleMain: '당신의 시간을',
        titleHighlight: '정복하세요.',
        subtitle:
            '오늘부터 Day Check와 함께 목표를 시각화해보세요.',
        downloadOnStore: 'App Store',
        downloadOnPlay: 'Google Play',
    },
};
