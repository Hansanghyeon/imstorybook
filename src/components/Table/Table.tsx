import React from 'react'

const Table = (): JSX.Element => {
  return (
    <div className="overflow-scroll w-full border border-[#ddd] max-h-[calc(100vh-310px)] min-h-[300px] bg-white">
      <div className="grid gap-x-[14px] grid-cols-[minmax(130px,1fr),minmax(100px,1fr),minmax(200px,1fr),minmax(130px,1fr),minmax(100px,1fr),minmax(110px,1fr)] grid-rows-[34px] items-center text-[#757575] border-[#ddd] border-b bg-[#fafafa] w-min sticky top-0 min-w-full">
        <div className="px-[12px] py-[8px]">일자</div>
        <div className="px-[12px] py-[8px] text-center">이름(닉네임)</div>
        <div className="px-[12px] py-[8px]">사유/내용</div>
        <div className="px-[12px] py-[8px]">관련주문</div>
        <div className="px-[12px] py-[8px] text-right">지급/차감</div>
        <div className="px-[12px] py-[8px]">처리자</div>
      </div>
      {[...Array(100)].map(() => (
        <div className="grid gap-x-[14px] grid-cols-[minmax(130px,1fr),minmax(100px,1fr),minmax(200px,1fr),minmax(130px,1fr),minmax(100px,1fr),minmax(110px,1fr)] border-[#ddd] border-b last:border-b-0 w-min min-w-full">
          <div className="px-[12px] py-[8px] text-[#212121]">2022-01-27 20:43</div>
          <div className="px-[12px] py-[8px] text-[#212121] text-center">홍길동</div>
          <div className="px-[12px] py-[8px] text-[#212121]">
            상품구매시 할인 차감<br />
            [2021202020202]
          </div>
          <div className="px-[12px] py-[8px] text-[#212121]">
            Classic Topper 외 2건
          </div>
          <div className="px-[12px] py-[8px] text-[#453535] text-right">
            -500,000원
          </div>
          <div className="px-[12px] py-[8px] text-[#212121]">
            시스템 자동발급
          </div>
        </div>
      ))}
    </div>
  )
}

export default Table