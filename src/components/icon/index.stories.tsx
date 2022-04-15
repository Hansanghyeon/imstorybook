import React from 'react';

export default {
  title: "component/icon",
};

const Ic = ({ className }: {
  className: string
}) => (
  <div className="flex items-center gap-x-[14px] leading-none">
    <i className={className} /> <div className="cursor-pointer" onClick={() => { navigator.clipboard.writeText(className) }}>{className}</div>
  </div>
)
export const iconoon = () => (
  <div className="flex flex-wrap gap-[16px] text-[36px] text-black dark:text-white">
    <Ic className="im-icon im-ico-imweb" />
    <Ic className="im-icon im-ico-arrow-left" />
    <Ic className="im-icon im-ico-bell" />
    <Ic className="im-icon im-ico-circle-arrow-right" />
    <Ic className="im-icon im-ico-chains" />
    <Ic className="im-icon im-ico-circle-delete" />
    <Ic className="im-icon im-ico-close" />
    <Ic className="im-icon im-ico-check-solid" />
    <Ic className="im-icon im-ico-delete" />
    <Ic className="im-icon im-ico-decrement" />
    <Ic className="im-icon im-ico-extinction" />
    <Ic className="im-icon im-ico-equals-plain" />
    <Ic className="im-icon im-ico-global" />
    <Ic className="im-icon im-ico-increment" />
    <Ic className="im-icon im-ico-more" />
    <Ic className="im-icon im-ico-mappin" />
    <Ic className="im-icon im-ico-minus-solid" />
    <Ic className="im-icon im-ico-outline-alert" />
    <Ic className="im-icon im-ico-plus-solid" />
    <Ic className="im-icon im-ico-remaining" />
    <Ic className="im-icon im-ico-settings" />
    <Ic className="im-icon im-ico-under" />
    <Ic className="im-icon im-ico-check" />
    <Ic className="im-icon im-ico-arrow-long-left" />
    <Ic className="im-icon im-ico-arrow-long-right" />
  </div>
)