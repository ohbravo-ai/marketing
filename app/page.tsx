const kakaoUrl = process.env.KAKAO_OPEN_CHAT_URL ?? "#";
const zoomUrl = process.env.ZOOM_MEETING_URL ?? "#";

const seminarPoints = [
  "ChatGPT 앱에서 Work를 활용하는 흐름",
  "사이트 제작과 공유에 바로 쓰는 방법",
  "원격제어 기능을 업무에 연결하는 실전 팁",
];

export default function Home() {
  return (
    <main className="seminar-page">
      <section className="hero" aria-labelledby="seminar-title">
        <div className="hero__copy">
          <p className="eyebrow">무료 온라인 세미나</p>
          <h1 id="seminar-title">ChatGPT 앱 사용법</h1>
          <p className="subtitle">Work, 사이트, 원격제어를 한 번에 익히는 저녁 세션</p>

          <div className="actions" aria-label="세미나 참여 링크">
            <a className="button button--primary" href={kakaoUrl} target="_blank" rel="noreferrer">
              오픈채팅방 입장
            </a>
            <a className="button button--secondary" href={zoomUrl} target="_blank" rel="noreferrer">
              Zoom 참여하기
            </a>
          </div>
        </div>

        <aside className="event-card" aria-label="세미나 핵심 정보">
          <div className="event-card__topline">Online Zoom</div>
          <div className="event-card__date">7/20 월</div>
          <div className="event-card__time">저녁 9시</div>
          <div className="event-card__speaker">
            <span>발제</span>
            <strong>원운식 소장</strong>
            <small>AiHR 대표</small>
          </div>
        </aside>
      </section>

      <section className="details" aria-label="세미나 상세 안내">
        <div className="detail-panel">
          <h2>이번 세미나에서 다루는 내용</h2>
          <ul>
            {seminarPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="join-panel">
          <p className="join-panel__label">참여 전 안내</p>
          <p>
            오픈채팅방에서 공지와 자료를 확인하고, 세미나 시간에는 Zoom 링크로 바로
            입장해 주세요.
          </p>
          <a className="text-link" href={zoomUrl} target="_blank" rel="noreferrer">
            Zoom 링크 열기
          </a>
        </div>
      </section>
    </main>
  );
}

