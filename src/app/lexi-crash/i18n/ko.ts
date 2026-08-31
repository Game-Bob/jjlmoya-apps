import type { AppCardContent } from '../../../types';
import type { LexiCrashLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'lexi-crash',
    title: 'LexiCrash',
    subtitle: '단어를 만들고, 도전을 극복하고, 붕괴를 막아라.',
    description: '최고의 워드 퍼즐에서 정신적 민첩성을 시험하라. 최고 속도로 글자를 조합하고 붕괴를 막아라.',
};

export const landingContent: LexiCrashLandingContent = {
    hero: {
        badgeText: '오늘의 단어가 지금 사용 가능합니다',
        subtitle: '최고의 워드 퍼즐. 민첩한 두뇌를 위해 설계된 빠르고 무한한 게임.',
        artNote: '다음 포근한 도전이 기다리고 있어요',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: '지금 다운로드',
    },
    gameModes: {
        titleMain: '경험',
        titleHighlight: '10/10',
        subtitle: '단순한 워드 게임이 아닙니다. 기본에 만족하지 않는 사람들을 위한 시각적·정신적 도전.',
        crash: {
            title: '순수한 아드레날린',
            description: '압박 속에서 단어를 만들어라. 글자는 기다리지 않는다. 혼돈이 압도하기 전에 보드를 비워라.',
            alt: '크래시 모드',
        },
        relax: {
            title: '정신적 숙련',
            description: '시간을 가져라. 시각적 압박 없이, 당신과 보드만. 가장 가치 있는 조합을 찾아라.',
            alt: '릴렉스 모드',
        },
        daily: {
            title: '글로벌 도전',
            description: '매일 비밀 단어 하나. 모두가 가장 빠르기 위해 경쟁한다. 랭킹을 이끌 수 있겠는가?',
            alt: '일일 도전',
        },
    },
    socialProof: {
        titleMain: '움직임에',
        titleHighlight: '참여하라',
        subtitle: '수천 명의 두뇌가 이미 붕괴에 도전하고 있다. 진행 상황을 추적하고, 기록을 깨고, 글로벌 어휘를 지배하라.',
        challengesLabel: '극복한 도전',
        wordsLabel: '단어',
        ratingLabel: '평가',
        feedUser1: '@Alex94',
        feedAction1: '가 크래시 모드에서 기록을 방금 경신했습니다',
        feedUser2: '@Marta_Lex',
        feedAction2: '가 오늘의 단어를 찾았습니다',
        screenshotAlt: 'LexiCrash 스크린샷',
    },
    roadmap: {
        titleMain: '우선순위에',
        titleHighlight: '투표하라',
        subtitle: '여러분의 의견을 듣고 싶습니다. 다음 업데이트에서 어떤 섹션을 우선시해야 할지 선택하세요.',
        items: [
            {
                title: '게임 모드',
                description: '촉각적 경험을 확장하기 위한 새로운 메카닉과 테마 보드.',
                tag: '몰입감',
            },
            {
                title: '스토리 모드',
                description: '내러티브 도전과 잠금 해제 가능한 콘텐츠가 있는 어휘를 통한 서사시적 여정.',
                tag: '내러티브',
            },
            {
                title: '랭킹',
                description: '전 세계와 경쟁하고 진정한 단어의 마스터가 누구인지 증명하라.',
                tag: '소셜',
            },
        ],
        voteLabel: '클릭하여 투표',
        votedLabel: '우선순위로 표시됨',
        feedbackTitle: '아이디어가 있나요?',
        feedbackSub: '우리에게 연락하여 LexiCrash를 개선하는 데 도움을 주세요.',
    },
    finalCta: {
        titleMain: '다음 단어가',
        titleHighlight: '기다리고 있어요',
        subtitle: 'LexiCrash를 열고 나만의 리듬으로 편안하게 단어를 즐겨 보세요.',
        downloadOnPlay: 'Google Play',
        downloadOnStore: 'App Store',
        downloadLabel: '다운로드',
        downloadAction: '다운로드',
        ratingText: '커뮤니티가 사랑하는 따뜻한 단어 휴식',
    },
    cozyFeatures: {
        eyebrow: '포근한 단어 리듬',
        titleMain: '조금만 플레이하고',
        titleHighlight: '기분 좋게 돌아오세요.',
        subtitle: '짧은 휴식과 차분한 집중, “단어 하나만 더” 싶은 순간을 위한 편안하고 알록달록한 단어 게임 리듬입니다.',
        cards: [
            { title: '나만의 리듬을 찾아요', description: '짧은 게임, 보기 쉬운 보드, 첫 단어부터 느껴지는 만족스러운 조합을 만나 보세요.', alt: '크래시 모드 게임 장면' },
            { title: '체인을 반짝이게 해요', description: '단어마다 작은 불빛이 더해져요. 콤보를 만들고 보드를 정리하며 성취감을 느껴 보세요.', alt: '크래시 모드 게임 장면' },
            { title: '편안하게 연속 기록을 쌓아요', description: '오늘의 단어로 돌아와 최고의 발견을 축하하고 나만의 단어 세계를 키워 보세요.', alt: 'LexiCrash 진행 상황과 통계' },
        ],
    },
    storyShowcase: {
        eyebrow: '단어로 만든 작은 세계',
        titleMain: '나만의 작은',
        titleHighlight: '단어 우주예요.',
        subtitle: '포근한 구름과 장난스러운 타일, 작은 축하가 매 라운드를 다시 찾고 싶은 공간으로 만들어 줍니다.',
        ariaLabel: 'LexiCrash 기능',
        bannerAlt: '알록달록하고 포근한 단어 세계 속 LexiCrash',
        pills: ['매일의 루틴', '포근한 도전', '개인 최고 기록'],
    },
};
