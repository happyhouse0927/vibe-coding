import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const levels = [
    {
        id: "level1",
        label: "Level 1",
        title: "입문 과정",
        subtitle: "한글 읽기부터 자기소개까지",
        duration: "8주",
        frequency: "주 2회 · 회당 50분",
        color: "sky",
        badgeClass: "bg-orange-100 text-orange-700 hover:bg-orange-100",
        borderClass: "border-orange-200",
        bgClass: "bg-orange-50/50",
        dotClass: "bg-orange-500",
        image:
            "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1",
        imageAlt: "한글 자음 모음 공부하는 모습",
        description:
            "한국어를 처음 시작하는 분들을 위한 과정입니다. 한글 자모의 원리부터 기초 문장 구성까지, 탄탄한 기반을 다집니다.",
        weeks: [
            {
                week: "1–2주",
                topic: "한글 기초",
                details: [
                    "자음 14개 · 모음 10개 학습",
                    "기본 음절 조합 원리 이해",
                    "발음 연습 (단어 레벨)",
                ],
            },
            {
                week: "3–4주",
                topic: "읽기 & 쓰기",
                details: [
                    "받침이 없는 단어 읽기",
                    "받침 규칙 및 연음 현상",
                    "일상 단어 200개 습득",
                ],
            },
            {
                week: "5–6주",
                topic: "기본 인사 & 표현",
                details: [
                    "인사말 · 감사 · 사과 표현",
                    "숫자 (1–100), 날짜, 요일",
                    "시간 표현 (몇 시예요?)",
                ],
            },
            {
                week: "7–8주",
                topic: "자기소개",
                details: [
                    "이름 · 나라 · 직업 말하기",
                    "기본 조사 (은/는, 이/가, 을/를)",
                    "간단한 자기소개 스피킹 평가",
                ],
            },
        ],
        outcome: "수료 후 TOPIK 1급 수준의 어휘 및 문장을 이해하고 구사할 수 있습니다.",
    },
    {
        id: "level2",
        label: "Level 2",
        title: "초급 과정",
        subtitle: "일상 대화 자연스럽게",
        duration: "10주",
        frequency: "주 2회 · 회당 50분",
        color: "emerald",
        badgeClass: "bg-amber-100 text-amber-700 hover:bg-amber-100",
        borderClass: "border-amber-200",
        bgClass: "bg-amber-50/50",
        dotClass: "bg-amber-500",
        image:
            "https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1",
        imageAlt: "온라인 화상 수업 중인 학생들",
        description:
            "기초 한글을 뗀 분들을 위한 과정입니다. 실생활에서 꼭 필요한 쇼핑, 음식, 교통 등의 표현을 익히고 짧은 대화를 이끌어 갈 수 있게 됩니다.",
        weeks: [
            {
                week: "1–2주",
                topic: "쇼핑 & 가격",
                details: [
                    "값 흥정하기 · 계산하기",
                    "고유어 숫자 vs 한자 숫자",
                    "역할극: 편의점 / 시장",
                ],
            },
            {
                week: "3–4주",
                topic: "음식 주문",
                details: [
                    "식당에서 메뉴 고르기",
                    "맛 표현 (맵다, 달다, 짜다…)",
                    "역할극: 식당 주문 & 계산",
                ],
            },
            {
                week: "5–6주",
                topic: "교통 & 길 찾기",
                details: [
                    "버스 · 지하철 · 택시 이용",
                    "위치 표현 (옆에, 앞에, 건너편…)",
                    "지도 보고 길 설명하기",
                ],
            },
            {
                week: "7–8주",
                topic: "일정 & 약속",
                details: [
                    "과거·현재·미래 시제 복습",
                    "약속 잡기 / 거절하기",
                    "캘린더 활용 역할극",
                ],
            },
            {
                week: "9–10주",
                topic: "종합 회화 & 평가",
                details: [
                    "복습 및 취약 표현 집중 훈련",
                    "5분 자유 대화 스피킹 테스트",
                    "개인 피드백 리포트 제공",
                ],
            },
        ],
        outcome: "수료 후 TOPIK 2급 수준의 일상 대화를 무리 없이 이어갈 수 있습니다.",
    },
    {
        id: "level3",
        label: "Level 3",
        title: "중급 과정",
        subtitle: "감정·의견 자유롭게 나누기",
        duration: "12주",
        frequency: "주 3회 · 회당 50분",
        color: "violet",
        badgeClass: "bg-rose-100 text-rose-700 hover:bg-rose-100",
        borderClass: "border-rose-200",
        bgClass: "bg-rose-50/50",
        dotClass: "bg-rose-500",
        image:
            "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1",
        imageAlt: "미디어로 심화 한국어를 학습하는 모습",
        description:
            "일상 대화가 가능한 분들을 위한 심화 과정입니다. 드라마·뉴스·유튜브 등 실제 미디어를 활용하여 자신의 감정과 의견을 유창하게 표현하는 역량을 키웁니다.",
        weeks: [
            {
                week: "1–2주",
                topic: "뉴스 한국어",
                details: [
                    "뉴스 어휘 및 문장 구조 분석",
                    "요약·정리 말하기 훈련",
                    "사실 vs 의견 구분 표현",
                ],
            },
            {
                week: "3–4주",
                topic: "드라마 & 일상 표현",
                details: [
                    "감정 어휘 확장 (50+ 표현)",
                    "구어체 줄임말 & 신조어",
                    "드라마 대사 역할극",
                ],
            },
            {
                week: "5–6주",
                topic: "토론 & 의견 제시",
                details: [
                    "찬반 의견 구조 잡기",
                    "대화 연결어 (게다가, 반면에…)",
                    "주제 토론 (SNS, 환경, 문화)",
                ],
            },
            {
                week: "7–8주",
                topic: "한국 문화 & 사회",
                details: [
                    "K-드라마 / K-팝 문화 읽기",
                    "한국 직장·가족 문화 이해",
                    "문화 비교 발표",
                ],
            },
            {
                week: "9–10주",
                topic: "글쓰기 & 이메일",
                details: [
                    "격식체 vs 비격식체 글쓰기",
                    "이메일·메시지 작성 실습",
                    "SNS 짧은 글 작성",
                ],
            },
            {
                week: "11–12주",
                topic: "종합 심화 & 평가",
                details: [
                    "TOPIK 3–4급 유형 문제 풀이",
                    "10분 주제 발표 스피킹 평가",
                    "개인 학습 완성도 리포트",
                ],
            },
        ],
        outcome: "수료 후 TOPIK 3–4급 수준의 의사소통 능력을 갖추게 됩니다.",
    },
];

const faqs = [
    {
        q: "수업은 어떤 방식으로 진행되나요?",
        a: "Zoom을 활용한 실시간 라이브 수업으로 진행됩니다. 최대 6명의 소규모 반 구성으로 충분한 말하기 연습 기회를 보장합니다.",
    },
    {
        q: "레벨 테스트는 어떻게 받나요?",
        a: "체험 수업 신청 시 간단한 온라인 레벨 테스트를 제공합니다. 결과에 따라 가장 적합한 과정을 추천해 드립니다.",
    },
    {
        q: "녹화 강의는 얼마나 제공되나요?",
        a: "모든 라이브 수업은 녹화되며, 수강 기간 동안 무제한으로 다시 볼 수 있습니다. 과정 종료 후 3개월간 추가 제공됩니다.",
    },
    {
        q: "중간에 레벨을 변경할 수 있나요?",
        a: "네, 가능합니다. 담당 강사와 상담 후 적합한 레벨로 이동할 수 있으며, 남은 수업 횟수는 그대로 이전됩니다.",
    },
];

export default function CurriculumPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50/30 to-rose-50/40 text-foreground">
            {/* 네비게이션 */}
            <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
                    <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground text-sm font-bold shadow">
                            한
                        </div>
                        <span className="text-sm font-semibold tracking-tight text-foreground">
                            신나는 한국어 교실
                        </span>
                    </a>
                    <nav className="hidden items-center gap-1 md:flex">
                        <Button variant="ghost" size="sm" asChild>
                            <a href="/#features">특징</a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                            <a href="/#levels">레벨 안내</a>
                        </Button>
                        <Button variant="secondary" size="sm" asChild>
                            <a href="/curriculum">커리큘럼</a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                            <a href="/#reviews">수강 후기</a>
                        </Button>
                        <Button size="sm" className="ml-2" asChild>
                            <a href="/#start">무료 시작</a>
                        </Button>
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-6 py-16 md:px-10">
                {/* 페이지 헤더 */}
                <section className="mb-16 space-y-5 text-center">
                    <Badge variant="outline">📚 전체 커리큘럼</Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                        수준별 한국어 교육과정
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                        입문부터 중급까지, 체계적으로 설계된 커리큘럼으로 한국어 실력을
                        단계적으로 키워나가세요.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                        <a href="#level1">
                            <Badge variant="secondary" className="cursor-pointer bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-1.5 text-sm">
                                Level 1 · 입문
                            </Badge>
                        </a>
                        <a href="#level2">
                            <Badge variant="secondary" className="cursor-pointer bg-amber-100 text-amber-700 hover:bg-amber-200 px-4 py-1.5 text-sm">
                                Level 2 · 초급
                            </Badge>
                        </a>
                        <a href="#level3">
                            <Badge variant="secondary" className="cursor-pointer bg-rose-100 text-rose-700 hover:bg-rose-200 px-4 py-1.5 text-sm">
                                Level 3 · 중급
                            </Badge>
                        </a>
                    </div>
                </section>

                {/* 레벨별 커리큘럼 */}
                <div className="flex flex-col gap-24">
                    {levels.map((level) => (
                        <section key={level.id} id={level.id} className="scroll-mt-24">
                            {/* 섹션 헤더 */}
                            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                                <div className="space-y-3">
                                    <Badge
                                        variant="secondary"
                                        className={`w-fit px-3 py-1 text-sm ${level.badgeClass}`}
                                    >
                                        {level.label}
                                    </Badge>
                                    <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                                        {level.title}
                                        <span className="ml-3 text-lg font-normal text-muted-foreground">
                                            — {level.subtitle}
                                        </span>
                                    </h2>
                                    <p className="max-w-xl text-muted-foreground">{level.description}</p>
                                    <div className="flex flex-wrap gap-3 text-sm">
                                        <span className="flex items-center gap-1.5 text-muted-foreground">
                                            🗓️ <strong className="text-foreground">{level.duration}</strong> 과정
                                        </span>
                                        <span className="flex items-center gap-1.5 text-muted-foreground">
                                            🕐 {level.frequency}
                                        </span>
                                    </div>
                                </div>
                                <Button asChild className="shrink-0 rounded-full">
                                    <a href="/#start">수강 신청하기 →</a>
                                </Button>
                            </div>

                            {/* 이미지 */}
                            <div className="mb-8 overflow-hidden rounded-2xl shadow-lg">
                                <img
                                    src={level.image}
                                    alt={level.imageAlt}
                                    className="h-56 w-full object-cover md:h-72"
                                    loading="lazy"
                                />
                            </div>

                            {/* 주차별 커리큘럼 카드 */}
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {level.weeks.map((w, i) => (
                                    <Card
                                        key={i}
                                        className={`border ${level.borderClass} ${level.bgClass} shadow-sm hover:shadow-md transition-shadow duration-200`}
                                    >
                                        <CardHeader className="pb-2">
                                            <div className="flex items-center gap-2">
                                                <span className={`h-2 w-2 rounded-full ${level.dotClass}`} />
                                                <span className="text-xs font-semibold text-muted-foreground">
                                                    {w.week}
                                                </span>
                                            </div>
                                            <CardTitle className="text-base">{w.topic}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-1.5">
                                                {w.details.map((d, j) => (
                                                    <li
                                                        key={j}
                                                        className="flex items-start gap-2 text-sm text-muted-foreground"
                                                    >
                                                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                                                        {d}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* 수료 목표 */}
                            <div className={`mt-6 rounded-xl border ${level.borderClass} ${level.bgClass} px-5 py-4`}>
                                <p className="text-sm text-muted-foreground">
                                    <span className="mr-2">🎓</span>
                                    <strong className="text-foreground">수료 후 목표 &nbsp;·&nbsp;</strong>
                                    {level.outcome}
                                </p>
                            </div>
                        </section>
                    ))}
                </div>

                <Separator className="my-20" />

                {/* 수업 진행 방식 */}
                <section className="mb-20 space-y-8">
                    <div className="space-y-2 text-center">
                        <Badge variant="outline">수업 방식</Badge>
                        <h2 className="text-2xl font-bold">이렇게 수업이 진행돼요</h2>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                        {[
                            {
                                icon: "🎥",
                                title: "실시간 라이브 수업",
                                desc: "Zoom 기반의 화상 수업으로, 강사와 실시간으로 소통하며 학습합니다. 최대 6인 소규모 반 운영.",
                            },
                            {
                                icon: "📼",
                                title: "녹화 강의 무제한 복습",
                                desc: "모든 라이브 수업은 자동 녹화되어 수강 기간 내 언제든지 다시 볼 수 있습니다.",
                            },
                            {
                                icon: "📄",
                                title: "PDF 학습 자료 제공",
                                desc: "매 수업마다 핵심 표현 정리 노트와 연습 문제 PDF를 카카오톡 혹은 이메일로 발송합니다.",
                            },
                            {
                                icon: "✏️",
                                title: "개인별 피드백",
                                desc: "스피킹 테스트 후 발음 · 문법 · 표현 관련 개인 맞춤 피드백 리포트를 제공합니다.",
                            },
                        ].map((item, i) => (
                            <Card key={i} className="border-border/60 shadow-sm">
                                <CardContent className="pt-6">
                                    <div className="flex gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-muted text-2xl">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-20 space-y-8">
                    <div className="space-y-2 text-center">
                        <Badge variant="outline">FAQ</Badge>
                        <h2 className="text-2xl font-bold">자주 묻는 질문</h2>
                    </div>
                    <div className="flex flex-col gap-3">
                        {faqs.map((faq, i) => (
                            <Card key={i} className="border-border/60 shadow-sm">
                                <CardContent className="pt-5 pb-5">
                                    <p className="mb-2 font-semibold text-foreground">Q. {faq.q}</p>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        A. {faq.a}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section>
                    <Card className="overflow-hidden border-0 shadow-2xl">
                        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 p-8 text-white md:p-10">
                            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                                <div className="space-y-3">
                                    <Badge className="bg-white/20 text-white hover:bg-white/30 border-white/20">
                                        🎉 지금 바로 시작
                                    </Badge>
                                    <h2 className="text-2xl font-bold">
                                        무료 체험 수업으로 시작해보세요
                                    </h2>
                                    <p className="text-sm text-sky-100/90 max-w-sm">
                                        레벨 테스트 후 나에게 맞는 과정을 추천받고, 첫 수업을 무료로 경험해 보세요.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-full bg-white text-orange-700 hover:bg-orange-50 shadow-lg px-8 font-semibold shrink-0"
                                >
                                    <a href="/#start">체험 수업 신청하기</a>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* 푸터 */}
                <footer className="mt-16 border-t border-border/60 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold">
                                한
                            </div>
                            <span className="text-sm font-semibold text-foreground">
                                신나는 한국어 교실
                            </span>
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                            © {new Date().getFullYear()} 신나는 한국어 교실 · 교육 플랫폼 랜딩 페이지 예제
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                            이미지 출처: Pexels 무료 소스
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
}
