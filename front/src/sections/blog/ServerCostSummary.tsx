import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { sectionEyebrow, sectionTitle } from '../../styles/layout.css'
import {
  bulletList,
  cardHighlight,
  cardMeta,
  cardTitle,
  cardsGrid,
  costCard,
  costTable,
  introText,
  noteText,
  noticeList,
  sectionBlock,
  summaryWrapper,
  tableCell,
  tableHead,
  tableWrap,
} from './serverCost.css'

export const ServerCostSummary = () => {
  return (
    <Section>
      <Container>
        <div className={summaryWrapper}>
          <div>
            <p className={sectionEyebrow}>Server Guide</p>
            <h2 className={sectionTitle}>서버 비용 간단 정리</h2>
            <p className={introText}>
              서비스 운영은 인프라보다 관리 체계가 핵심입니다. 운영 주체와 보안 수준에 따라 적절한
              구성을 선택하는 것이 중요합니다.
            </p>
          </div>

          <div className={sectionBlock}>
            <h3>고객에게 드리는 핵심 안내(보안/운영 관점)</h3>
            <div className={noticeList}>
              <p>개인정보 보안은 “서버가 어디냐”보다 “누가 지속적으로 관리하느냐”가 핵심입니다.</p>
              <p>
                관리자가 없는 환경이라면 로그인/DB/파일은 관리형 서비스(Supabase 등)로 두는 게 더
                안전합니다.
              </p>
              <p>직접 서버(EC2/전통 호스팅)는 월 운영관리 계약 없이 방치되면 리스크가 커집니다.</p>
            </div>
          </div>

          <div className={sectionBlock}>
            <h3>A/B/C 패키지 요약</h3>
            <div className={cardsGrid}>
              <article className={costCard}>
                <h4 className={cardTitle}>A. 프론트만</h4>
                <p className={cardMeta}>소개/랜딩/포트폴리오/문의 페이지</p>
                <p className={cardHighlight}>$20~ / 월</p>
                <ul className={bulletList}>
                  <li>Vercel Pro 기준</li>
                  <li>트래픽/빌드 초과 시 추가 비용</li>
                  <li>운영 난이도: ⭐ / 리스크: ⭐</li>
                </ul>
              </article>
              <article className={costCard}>
                <h4 className={cardTitle}>B. 프론트 + 백(Supabase)</h4>
                <p className={cardMeta}>로그인/데이터 저장/파일 업로드/간단 관리자</p>
                <p className={cardHighlight}>$45~ / 월</p>
                <ul className={bulletList}>
                  <li>Supabase Pro + Vercel Pro</li>
                  <li>DB/스토리지 사용량에 따라 변동</li>
                  <li>운영 난이도: ⭐⭐ / 리스크: ⭐⭐ (RLS 적용 전제)</li>
                </ul>
              </article>
              <article className={costCard}>
                <h4 className={cardTitle}>C. 프론트 + 백 자체 개발(AWS)</h4>
                <p className={cardMeta}>복잡한 로직/확장/회사 정책(통제)</p>
                <p className={cardHighlight}>$35+ / 월 + S3/DB</p>
                <ul className={bulletList}>
                  <li>EC2 + S3 + (RDS 또는 Supabase) + Vercel</li>
                  <li>S3 전송량/서버 스펙 업에 따라 증가</li>
                  <li>운영 난이도: ⭐⭐⭐⭐ / 리스크: ⭐⭐⭐⭐ (관리 없으면)</li>
                </ul>
              </article>
            </div>
          </div>

          <div className={sectionBlock}>
            <h3>A/B/C 패키지 비용표</h3>
            <p className={noteText}>모바일에서는 좌우 스크롤로 확인할 수 있습니다.</p>
            <div className={tableWrap}>
              <table className={costTable}>
                <thead>
                  <tr>
                    <th className={tableHead}>패키지</th>
                    <th className={tableHead}>포함 기능(고객 관점)</th>
                    <th className={tableHead}>정확한 스택/플랜</th>
                    <th className={tableHead}>월 고정비(최소)</th>
                    <th className={tableHead}>변동비가 붙는 경우</th>
                    <th className={tableHead}>운영 난이도/리스크</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tableCell}>A. 프론트만</td>
                    <td className={tableCell}>소개/랜딩/포트폴리오/문의 페이지</td>
                    <td className={tableCell}>Vercel Pro: $20/seat/mo</td>
                    <td className={tableCell}>$20부터</td>
                    <td className={tableCell}>트래픽/빌드/기능 사용량 초과</td>
                    <td className={tableCell}>⭐ / ⭐</td>
                  </tr>
                  <tr>
                    <td className={tableCell}>B. 프론트 + 백(Supabase)</td>
                    <td className={tableCell}>로그인, 데이터 저장, 파일 업로드, 간단 관리자</td>
                    <td className={tableCell}>Supabase Pro $25 + Vercel Pro $20</td>
                    <td className={tableCell}>$45부터</td>
                    <td className={tableCell}>DB 용량/성능, 스토리지/다운로드 증가</td>
                    <td className={tableCell}>⭐⭐ / ⭐⭐ (RLS 적용 전제)</td>
                  </tr>
                  <tr>
                    <td className={tableCell}>C. 프론트 + 백 자체 개발(AWS EC2)</td>
                    <td className={tableCell}>복잡한 로직/확장/회사 정책(통제)</td>
                    <td className={tableCell}>
                      EC2 t3.small $15 + S3 + (RDS 또는 Supabase) + Vercel
                    </td>
                    <td className={tableCell}>$35+ (EC2+Vercel) + S3/DB</td>
                    <td className={tableCell}>S3 전송, 서버 스펙 업, RDS 고정비 상승</td>
                    <td className={tableCell}>⭐⭐⭐⭐ / ⭐⭐⭐⭐ (관리 없으면)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={noteText}>
              도메인과 HTTPS는 Vercel에서 일반적으로 자동 적용 가능합니다.
            </p>
          </div>

          <div className={sectionBlock}>
            <h3>운영관리(월 정액) 권장 문구 – C 패키지용</h3>
            <ul className={bulletList}>
              <li>권장: 월 운영관리 계약 포함(보안 패치/장애 대응/백업 점검/모니터링)</li>
              <li>대안: 고객사 내부 운영 담당자 지정(담당자 부재 시 리스크 증가)</li>
            </ul>
          </div>

          <div className={sectionBlock}>
            <h3>고객 계정 안내(인수인계/소유권 안전)</h3>
            <ul className={bulletList}>
              <li>서비스 계정(Supabase/Vercel/AWS)은 고객사 명의로 생성</li>
              <li>개발사는 멤버 초대 방식으로 권한 부여</li>
              <li>아이디/비밀번호 공유 방식은 지양</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
