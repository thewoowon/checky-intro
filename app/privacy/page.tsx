"use client";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Header from "../../components/Header";

const PrivacyPage = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-start py-2 min-h-screen text-black">
      <Header />
      <div className="flex flex-col max-w-3xl mt-6">
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Checky 개인정보 처리방침
        </Typography>
        <Typography
          sx={{
            mt: 2,
          }}
        >
          '체키'은(는) 개인정보 보호법 제30조에 따라 정보주체의 개인정보를
          보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
          위하여 다음과 같이 개인정보 처리지침을 수립․공개합니다.
        </Typography>
      </div>
      <div className="max-w-3xl mt-4">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ flexShrink: 0 }}>개인정보의 처리 목적</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              제1조(개인정보의 처리목적) '체키'은(는) 다음의 목적을 위하여
              개인정보를 처리합니다.
              <br />
              <br />
              처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지
              않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에
              따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              <br />
              <br />
              1.홈페이지 회원 가입 및 관리 회원 가입의사 확인, 회원제 서비스
              제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제
              시행에 따른 본인확인, 서비스 부정이용 방지, 만 14세 미만 아동의
              개인정보 처리시 법정대리인의 동의여부 확인, 각종 고지․통지,
              고충처리 등을 목적으로 개인정보를 처리합니다.
              <br />
              <br />
              2. 재화 또는 서비스 제공 물품배송, 서비스 제공, 계약서․청구서
              발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증,
              요금결제․정산, 채권추심 등을 목적으로 개인정보를 처리합니다.
              <br />
              <br />
              3. 고충처리 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한
              연락․통지, 처리결과 통보 등의 목적으로 개인정보를 처리합니다.
              <br />
              <br />
              4. '체키'의 개인정보 처리업무 개인정보 처리업무에 따른
              처리목적으로 개인정보를 처리합니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ flexShrink: 0 }}>
              개인정보의 처리 및 보유 기간
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              제2조(개인정보의 처리 및 보유기간)
              <br />
              ① '체키'은(는) 법령에 따른 개인정보 보유․이용기간 또는
              정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유․이용기간
              내에서 개인정보를 처리․보유합니다.
              <br />
              <br />
              ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
              <br />
              <br />
              1. 홈페이지 회원 가입 및 관리 : '체키' 홈페이지 탈퇴시까지 다만,
              다음의 사유에 해당하는 경우에는 해당 사유 종료시까지
              <br />
              <br />
              #1 관계 법령 위반에 따른 수사․조사 등이 진행중인 경우에는 해당
              수사․조사 종료시까지
              <br />
              <br />
              #2 홈페이지 이용에 따른 채권․채무관계 잔존시에는 해당
              채권․채무관계 정산시까지
              <br />
              <br />
              2. 재화 또는 서비스 제공 : 재화․서비스 공급완료 및 요금결제․정산
              완료시까지 다만, 다음의 사유에 해당하는 경우에는 해당 기간
              종료시까지
              <br />
              <br />
              #1 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른
              표시․광고, 계약내용 및 이행 등 거래에 관한 기록 - 표시․광고에 관한
              기록 : 6월 - 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 :
              5년 - 소비자 불만 또는 분쟁처리에 관한 기록 : 3년
              <br />
              <br />
              #2 「통신비밀보호법」제41조에 따른 통신사실확인자료 보관 - 가입자
              전기통신일시, 개시․종료시간, 상대방 가입자번호, 사용도수,
              발신기지국 위치추적자료 : 1년 - 컴퓨터통신, 인터넷 로그기록자료,
              접속지 추적자료 : 3개월
              <br />
              <br />
              #3 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」시행령
              제29조에 따른 본인확인정보 보관 : 게시판에 정보 게시가 종료된 후
              6개월
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{ width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ flexShrink: 0 }}>
              정보주체의 권리․의무 및 행사방법
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              제5조(정보주체의 권리․의무 및 행사방법)
              <br />
              ① 정보주체는 '체키'에 대해 언제든지 다음 각 호의 개인정보 보호
              관련 권리를 행사할 수 있습니다.
              <br />
              <br />
              1. 개인정보 열람요구
              <br />
              2. 오류 등이 있을 경우 정정 요구
              <br />
              3. 삭제요구
              <br />
              4. 처리정지 요구
              <br />
              <br />
              ② 제1항에 따른 권리 행사는 '체키'에 대해 개인정보 보호법 시행규칙
              별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여
              하실 수 있으며 '체키'은(는) 이에 대해 지체없이 조치하겠습니다.
              <br />
              <br />
              ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한
              경우에는 '체키'은(는) 정정 또는 삭제를 완료할 때까지 당해
              개인정보를 이용하거나 제공하지 않습니다.
              <br />
              <br />④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을
              받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보
              보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야
              합니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{ width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ flexShrink: 0 }}>
              처리하는 개인정보 항목
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              제6조(처리하는 개인정보 항목) '체키'은(는) 다음의 개인정보 항목을
              처리하고 있습니다.
              <br />
              <br />
              1. 홈페이지 회원 가입 및 관리 ․필수항목 : 성명, 생년월일, 아이디,
              비밀번호, 주소, 전화번호, 성별, 이메일주소, 아이핀번호 ․선택항목 :
              결혼여부, 관심분야
              <br />
              <br />
              2. 재화 또는 서비스 제공 ․필수항목 : 성명, 생년월일, 아이디,
              비밀번호, 주소, 전화번호, 이메일주소, 아이핀번호, 신용카드번호,
              은행계좌정보 등 결제정보 ․선택항목 : 관심분야, 과거 구매내역
              <br />
              <br />
              3. 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로
              생성되어 수집될 수 있습니다. ․IP주소, 쿠키, MAC주소, 서비스
              이용기록, 방문기록, 불량 이용기록 등
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          sx={{ width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ flexShrink: 0 }}>
              개인정보 파기에 관한 사항
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              제7조(개인정보의 파기)
              <br />
              <br />
              ① '체키'은(는) 개인정보 보유기간의 경과, 처리목적 달성 등
              개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
              파기합니다.
              <br />
              <br />
              ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나
              처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를
              계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의
              데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
              <br />
              <br />③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
              <br />
              1. 파기절차 '체키'은(는) 파기 사유가 발생한 개인정보를 선정하고,
              '체키'의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
              <br />
              2. 파기방법 '체키'은(는) 전자적 파일 형태로 기록․저장된 개인정보는
              기록을 재생할 수 없도록 파기하며, 종이 문서에 기록․저장된
              개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
          sx={{ width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ flexShrink: 0 }}>
              개인정보의 안전성 확보조치에 관한 사항
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              제8조(개인정보의 안전성 확보조치) '체키'은(는) 개인정보의 안전성
              확보를 위해 다음과 같은 조치를 취하고 있습니다.
              <br />
              1. 관리적 조치 : 내부관리계획 수립․시행, 정기적 직원 교육 등
              <br />
              2. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리,
              접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
              <br />
              3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
          sx={{ width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ flexShrink: 0 }}>
              개인정보 보호책임자에 관한 사항
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              제9조(개인정보 보호책임자)
              <br />
              <br />① '체키'은(는) 개인정보 처리에 관한 업무를 총괄해서
              책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제
              등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              <br />▶ 개인정보 보호책임자
              <br />
              성명 : 우원
              <br />
              직책 : Checky 개발자
              <br />
              연락처 : 010-6566-3684, thewoowon@naver.com
              <br /> ※ 개인정보 보호 담당부서로 연결됩니다.
              <br />
              <br />▶ 개인정보 보호
              <br />
              담당부서
              <br />
              부서명 : 체키 개발담당팀
              <br />
              담당자 : 우원 연락처 : 010-6566-3684, checky_im@gmail.com
              <br />
              <br />② 정보주체께서는 '체키'의 서비스(또는 사업)을 이용하시면서
              발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한
              사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.
              '체키'은(는) 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴
              것입니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
          sx={{ width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ flexShrink: 0 }}>
              개인정보 처리방침 변경에 관한 사항
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              제12조(개인정보 처리방침 변경)
              <br />
              <br />① 이 개인정보 처리방침은 2023. 9. 23부터 적용됩니다.
              <br />
              <br />② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
              <br />- 20XX. 9. 23 ~ 현재 적용
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default PrivacyPage;
