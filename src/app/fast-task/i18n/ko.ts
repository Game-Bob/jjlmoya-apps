import type { AppCardContent } from '../../../types';
import type { FastTaskLandingContent } from '../types';

export const cardContent: AppCardContent = {
    slug: 'fast-task',
    title: 'Fast Task: 태스크 캡처',
    subtitle: '쓰고. 보내고. 잊고. 평온.',
    description:
        '3초 만에 버그, 아이디어, 할 일을 캡처하세요. GitHub, Make, Linear로 노트를 바로 전송.',
};

export const landingContent: FastTaskLandingContent = {
    hero: {
        title: 'Fast Task',
        subtitle: '쓰고. 보내고. 잊고. 평온.',
        price: '4.95€',
        priceLabel: '전문가용 단일 결제',
    },
    concept: {
        label: '철학',
        main: '마찰 제로,',
        highlighted: '절대적 속도.',
        philosophy:
            'Fast Task는 무거운 프로젝트 관리자가 아닙니다. 당신의 집중을 방해받지 않도록 하는 초고속 입력 채널입니다.',
        highlights: [
            { label: '속도', value: '<3초' },
            { label: '연동', value: '네이티브' },
            { label: '오프라인', value: '우선' },
        ],
    },
    benefits: {
        titleMain: '일일 워크플로우를',
        titleHighlight: '최적화하세요.',
        items: [
            {
                title: '3초 만에 캡처',
                text: '채팅처럼 작동합니다: 열고, 쓰고, 보내세요. 서식도, 필수 입력 필드도 없습니다.',
                icon: 'mdi:lightning-bolt',
            },
            {
                title: '프로 연동',
                text: '프로젝트를 GitHub, Linear, Make에 직접 연결하세요.',
                icon: 'mdi:connection',
            },
            {
                title: '철저한 개인정보 보호',
                text: '토큰과 태스크는 기기에만 저장됩니다. 중간 서버나 추적이 없습니다.',
                icon: 'mdi:shield-check',
            },
            {
                title: '오프라인 우선 모드',
                text: '연결이 끊겨도 태스크를 보내세요. 다시 온라인이 되면 백그라운드에서 동기화됩니다.',
                icon: 'mdi:wifi-off',
            },
        ],
    },
    simulation: {
        titleBefore: '생각에서 실천까지 단',
        steps: [
            {
                label: '쓰기',
                desc: '앱을 열고 떠오르는 아이디어를 즉시 캡처하세요.',
                icon: 'mdi:keyboard-outline',
            },
            {
                label: '컨텍스트',
                desc: '자동으로 포맷팅되고 데이터가 보강됩니다.',
                icon: 'mdi:brain',
            },
            {
                label: '전송완료',
                desc: '연동 툴로 바로 전송되어 생산 준비가 끝납니다.',
                icon: 'mdi:send-check',
            },
        ],
    },
    integrations: {
        label: '개방형 에코시스템',
        titleMain: '네이티브',
        titleHighlight: '연동',
        description:
            'Fast Task는 이미 사용 중인 툴과 직접 연결됩니다. 중간 단계나 지연이 없습니다.',
        ctaTitle: '특정 연동 기능이 필요하신가요?',
        ctaLinkText: '지원팀에 문의하기',
        comingSoon: '출시 예정',
    },
    earlyAdopter: {
        badge: '얼리 어답터 프로그램',
        titleMain: '라이선스를',
        titleHighlight: '선물합니다.',
        description:
            '까다로운 전문가들의 실제 피드백을 찾고 있습니다. 앱을 사용하고 진솔한 의견을 주신다면, 평생 라이선스를 드립니다.',
        countLabel: '남은 라이선스',
        countNote: '진정성 있는 관심을 보여주시는 선착순 100분께 드립니다.',
        cta: '라이선스 받기',
    },
    enterprise: {
        label: '엔터프라이즈 솔루션',
        titleMain: '기업 전용 앱을',
        titleHighlight: '원하시나요?',
        description:
            '고성능 팀의 생산성을 혁신합니다. Fast Task의 DNA를 그대로 담아 조직의 요구에 맞게 조정된 네이티브 툴을 제공합니다.',
        featureTitle: '맞춤형 에코시스템',
        featureText:
            'Salesforce, SAP, Jira Enterprise 및 독자 데이터베이스와의 연동.',
        cta: '이야기해 볼까요?',
    },
    gallery: {
        title: '미리보기',
    },
    footer: {
        line1: '쓰고.',
        line2: '잊으세요.',
        line3: '평온.',
        subtitle: '일상의 번거로움을 제거하세요',
    },
};
