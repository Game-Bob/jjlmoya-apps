import type { AppCardContent } from '../../../types';
import type { FortuneCookieLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fortune-cookie',
    title: '포춘 쿠키',
    subtitle: '한 번의 터치로 만나는 운명.',
    description: '하루에 단 한 번의 터치. 그 순간을 소중히 하세요. 명언이 아닌 꾸준함을 수집하는 것입니다.',
};

export const landingContent: FortuneCookieLandingContent = {
    hero: {
        tagline: '대부분은 기다릴 줄 모릅니다. 당신은 다릅니다.',
        description: '하루에 단 한 번의 터치. 그 순간을 소중히 하세요. 명언이 아닌 꾸준함을 수집하는 것입니다.',
        scanLabel: '스캔하여 다운로드',
    },
    challenge: {
        title: '데일리 챌린지.',
        crystalLabel: '크리스탈',
        standardLabel: '스탠다드',
        lunarLabel: '루나',
        quote: '오늘 디지털 세상이 새로운 기회를 열었습니다.',
        quoteNote: '앱에서만 한정 공개, 남은 시간',
        quoteHighlight: '24시간',
    },
    streak: {
        title: '신성한 기록.',
        description: '명언이 아닌 꾸준함을 수집하는 것입니다.',
        descriptionHighlight: '당신의 이야기는 매일매일 기록됩니다.',
        countdownPrefix: '오늘의 쿠키 종료까지:',
        tomorrowNote: '괜찮아요, 내일이면 또 다른 쿠키가 찾아올 거예요',
        altarLabel: '당신의 제단',
        nextMilestoneLabel: '다음 이정표',
        todayLabel: '오늘',
        dayPrefix: '일차',
    },
    showcase: {
        titleStart: '운명의 ',
        titleHighlight: '빛',
        titleEnd: '.',
        description: '골드, 제이드, 그리고 블랙 페이퍼. 단순한 메시지가 아니라 당신의 꾸준함과 직관이 만들어낸 트로피입니다.',
    },
    events: {
        title: '기간 한정 이벤트.',
        subtitle: '운명은 계절과 함께 변화합니다. 새로운 쿠키, 새로운 메시지, 새로운 행운.',
        items: [
            {
                name: '발렌타인데이',
                description: '사랑이 가득한 공기... 그리고 당신의 행운. 로맨틱한 쿠키를 찾아보세요.',
                date: '2월 14일',
            },
            {
                name: '말의 해',
                description: '행운의 황금룡과 함께 축하하세요. 번영의 해를 위한 특별한 쿠키.',
                date: '2월 17일',
            },
        ],
    },
    shorts: {
        title: '지금 이용 가능.',
        comingSoonCookies: '커밍 순 — 더 많은 쿠키',
        comingSoonEvents: '커밍 순 — 새로운 이벤트',
    },
    footer: {
        title: '함께하시겠어요?',
        subtitle: '클릭 한 번으로 당신의 기록이 시작됩니다.',
        downloadPrefix: '다운로드:',
    },
};
