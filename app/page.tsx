import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50/30 to-rose-50/40 text-foreground">
      {/* 네비게이션 */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground text-sm font-bold shadow">
              한
            </div>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              신나는 한국어 교실
            </span>
          </div>
          <nav className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" size="sm" asChild>
              <a href="#features">특징</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#levels">레벨 안내</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/curriculum">커리큘럼</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#reviews">로그인</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#reviews">수강 후기</a>
            </Button>
            <Button size="sm" className="ml-2" asChild>
              <a href="#start">무료 시작</a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-20 px-6 py-16 md:px-10">
        {/* 히어로 섹션 */}
        <section className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="flex-1 space-y-7">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">🎓 원어민 강사</Badge>
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">📹 라이브 수업</Badge>
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">♾️ 무제한 복습</Badge>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                신나는 한국어 교실
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                생동감 넘치는 살아있는 한국어의 소리와 말을 배워봅시다!  여러분의 귀에 한국어 말소리는 어떻게 들리나요? 여러분의 혀와 입은 한국어로 말할 준비가 되어 있나요? 여러분의 마음과 생각은 한국어로 전할 준비가 되었나요?
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button size="lg" asChild className="rounded-full px-7 shadow-md">
                <a href="#start">지금 무료로 시작하기 →</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full px-7"
              >
                <a href="#levels">커리큘럼 살펴보기</a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              ✅ 회원가입만 하면 체험 강의와 PDF 학습 자료를 무료로 받아볼 수
              있어요.
            </p>
          </div>

          <div className="flex-1">
            <Card className="overflow-hidden border-border/60 shadow-xl">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/6333509/pexels-photo-6333509.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1"
                  alt="온라인 한국어 수업을 듣는 학생들"
                  className="h-72 w-full object-cover md:h-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-foreground hover:bg-white/90 shadow">
                    🔴 Live · 지금 수업 중
                  </Badge>
                </div>
              </div>
              <CardContent className="p-3 text-xs text-muted-foreground flex items-center justify-between">
                <span>실시간 화상 수업 화면 예시</span>
                <a
                  href="https://www.pexels.com/photo/woman-in-white-long-sleeve-shirt-sitting-at-the-table-6333509/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  사진 출처: Pexels
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* 특징 섹션 */}
        <section id="features" className="space-y-8">
          <div className="space-y-2 text-center">
            <Badge variant="outline" className="mb-2">왜 우리 교실인가요?</Badge>
            <h2 className="text-2xl font-bold text-foreground">
              신나는 한국어 교실만의 특별함
            </h2>
            <p className="text-muted-foreground">
              학습자 중심의 커리큘럼으로 효과적인 학습을 도와드립니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <Card className="border-border/60 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-xl">
                  🗣️
                </div>
                <CardTitle className="text-base">실생활 중심 표현</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  카페·지하철·회사 등 실제 상황에서 바로 쓸 수 있는 표현을
                  중심으로, 교과서 문장이 아닌 자연스러운 한국어를 배웁니다.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/60 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-xl">
                  👥
                </div>
                <CardTitle className="text-base">작은 반, 많은 말하기</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  최대 6명의 소규모 라이브 수업으로, 모든 수강생이 충분히
                  말해보고 피드백을 받을 수 있도록 구성했습니다.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/60 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-100 text-xl">
                  📚
                </div>
                <CardTitle className="text-base">복습을 위한 자료 제공</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  녹화 강의, 발음 녹음 파일, PDF 요약 노트까지 한 번의 수업으로
                  오래 기억에 남을 수 있도록 도와드립니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 레벨 섹션 */}
        <section id="levels" className="space-y-8">
          <div className="space-y-2 text-center">
            <Badge variant="outline" className="mb-2">커리큘럼</Badge>
            <h2 className="text-2xl font-bold text-foreground">수준별 커리큘럼</h2>
            <p className="text-muted-foreground">
              내 수준에 맞는 클래스를 선택해 바로 시작하세요.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <Card className="border-orange-200 bg-orange-50/60 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-2">
                <Badge variant="secondary" className="w-fit bg-orange-100 text-orange-700 hover:bg-orange-100">
                  Level 1 · 입문
                </Badge>
                <CardTitle className="text-base mt-2">
                  한글 읽기부터 자기소개까지
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  한글 자모, 읽기·쓰기, 기본 인사말, 숫자, 날짜, 간단한
                  자기소개까지 다룹니다.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-orange-700">8주 과정</span>
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-orange-700">주 2회</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-amber-200 bg-amber-50/60 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-2">
                <Badge variant="secondary" className="w-fit bg-amber-100 text-amber-700 hover:bg-amber-100">
                  Level 2 · 초급
                </Badge>
                <CardTitle className="text-base mt-2">일상 대화 자연스럽게</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  쇼핑, 음식 주문, 길 찾기 등 한국에서 생활할 때 꼭 필요한
                  표현을 연습합니다.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-amber-700">10주 과정</span>
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-amber-700">주 2회</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-rose-200 bg-rose-50/60 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-2">
                <Badge variant="secondary" className="w-fit bg-rose-100 text-rose-700 hover:bg-rose-100">
                  Level 3 · 중급
                </Badge>
                <CardTitle className="text-base mt-2">감정·의견 나누기</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  뉴스·드라마·유튜브를 활용해 자신의 생각과 감정을 자연스럽게
                  표현하는 연습을 합니다.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-rose-100 px-2 py-1 text-rose-700">12주 과정</span>
                  <span className="rounded-full bg-rose-100 px-2 py-1 text-rose-700">주 3회</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 후기 섹션 */}
        <section id="reviews" className="space-y-8">
          <div className="space-y-2 text-center">
            <Badge variant="outline" className="mb-2">수강 후기</Badge>
            <h2 className="text-2xl font-bold text-foreground">
              수강생들이 이렇게 말해요
            </h2>
            <p className="text-muted-foreground">
              실제 수강생들의 생생한 후기를 확인해보세요.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="border-border/60 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/20 ring-offset-2">
                    <AvatarImage
                      src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
                      alt="Mina"
                    />
                    <AvatarFallback>MI</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-1 text-amber-400">
                      {"★★★★★".split("").map((s, i) => <span key={i} className="text-sm">{s}</span>)}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      &quot;한국어를 공부하면서 가장 어려웠던 건 말하기였는데,
                      수업 시간에 정말 많이 말해볼 수 있어서 자신감이
                      생겼어요.&quot;
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-foreground">Mina</span>
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0">Level 2 수강생</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/60 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/20 ring-offset-2">
                    <AvatarImage
                      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
                      alt="Alex"
                    />
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-1 text-amber-400">
                      {"★★★★★".split("").map((s, i) => <span key={i} className="text-sm">{s}</span>)}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      &quot;녹화 강의랑 노트 정리가 잘 되어 있어서 출근 후에도
                      다시 들으면서 복습하기 좋아요.&quot;
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-foreground">Alex</span>
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0">Level 3 수강생</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* 통계 */}
          <div className="grid grid-cols-3 gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">2,400+</p>
              <p className="text-xs text-muted-foreground mt-1">누적 수강생</p>
            </div>
            <div className="text-center border-x border-border/60">
              <p className="text-2xl font-bold text-primary">4.9</p>
              <p className="text-xs text-muted-foreground mt-1">평균 수업 평점</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">96%</p>
              <p className="text-xs text-muted-foreground mt-1">재수강률</p>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section id="start">
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 p-8 text-white md:p-10">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="space-y-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 border-white/20">
                    🎉 지금 바로 신청
                  </Badge>
                  <h2 className="text-2xl font-bold">
                    지금 바로 체험 수업을 신청해 보세요
                  </h2>
                  <p className="text-sm text-sky-100/90 max-w-sm">
                    간단한 정보를 남겨 주시면 레벨 테스트와 함께 가장 잘 맞는
                    수업을 추천해 드립니다.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-orange-700 hover:bg-orange-50 shadow-lg px-8 font-semibold shrink-0"
                >
                  <a href="#">체험 수업 신청하기</a>
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* 푸터 */}
        <footer className="border-t border-border/60 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold">
                한
              </div>
              <span className="text-sm font-semibold text-foreground">신나는 한국어 교실</span>
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
