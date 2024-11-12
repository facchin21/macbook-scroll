import {
    IconBrightnessDown,
    IconBrightnessUp,
    IconCaretRightFilled,
    IconCaretUpFilled,
    IconChevronUp,
    IconMicrophone,
    IconMoon,
    IconPlayerSkipForward,
    IconPlayerTrackNext,
    IconPlayerTrackPrev,
    IconTable,
    IconVolume,
    IconVolume2,
    IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { OptionKey } from './OptionKey';
import { KBtn } from './KBtn';
import { Row } from './Row';

export const Keypad = () => {
    return (
        (<div className="h-full rounded-md bg-[#050505] mx-1 p-1">
            {/* First Row */}
            <Row>
                <KBtn
                    className="w-10 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start">
                    esc
                </KBtn>
                <KBtn>
                    <IconBrightnessDown className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F1</span>
                </KBtn>

                <KBtn>
                    <IconBrightnessUp className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F2</span>
                </KBtn>
                <KBtn>
                    <IconTable className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F3</span>
                </KBtn>
                <KBtn>
                    <IconSearch className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F4</span>
                </KBtn>
                <KBtn>
                    <IconMicrophone className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F5</span>
                </KBtn>
                <KBtn>
                    <IconMoon className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F6</span>
                </KBtn>
                <KBtn>
                    <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F7</span>
                </KBtn>
                <KBtn>
                    <IconPlayerSkipForward className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F8</span>
                </KBtn>
                <KBtn>
                    <IconPlayerTrackNext className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F8</span>
                </KBtn>
                <KBtn>
                    <IconVolume3 className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F10</span>
                </KBtn>
                <KBtn>
                    <IconVolume2 className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F11</span>
                </KBtn>
                <KBtn>
                    <IconVolume className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F12</span>
                </KBtn>
                <KBtn>
                    <div
                        className="h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
                        <div className="bg-black h-full w-full rounded-full" />
                    </div>
                </KBtn>
            </Row>
            {/* Second row */}
            <Row>
                <KBtn>
                    <span className="block">~</span>
                    <span className="block mt-1">`</span>
                </KBtn>

                <KBtn>
                    <span className="block ">!</span>
                    <span className="block">1</span>
                </KBtn>
                <KBtn>
                    <span className="block">@</span>
                    <span className="block">2</span>
                </KBtn>
                <KBtn>
                    <span className="block">#</span>
                    <span className="block">3</span>
                </KBtn>
                <KBtn>
                    <span className="block">$</span>
                    <span className="block">4</span>
                </KBtn>
                <KBtn>
                    <span className="block">%</span>
                    <span className="block">5</span>
                </KBtn>
                <KBtn>
                    <span className="block">^</span>
                    <span className="block">6</span>
                </KBtn>
                <KBtn>
                    <span className="block">&</span>
                    <span className="block">7</span>
                </KBtn>
                <KBtn>
                    <span className="block">*</span>
                    <span className="block">8</span>
                </KBtn>
                <KBtn>
                    <span className="block">(</span>
                    <span className="block">9</span>
                </KBtn>
                <KBtn>
                    <span className="block">)</span>
                    <span className="block">0</span>
                </KBtn>
                <KBtn>
                    <span className="block">&mdash;</span>
                    <span className="block">_</span>
                </KBtn>
                <KBtn>
                    <span className="block">+</span>
                    <span className="block"> = </span>
                </KBtn>
                <KBtn
                    className="w-10 items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end">
                    delete
                </KBtn>
            </Row>
            {/* Third row */}
            <Row>
                <KBtn
                    className="w-10 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start">
                    tab
                </KBtn>
                <KBtn>
                    <span className="block">Q</span>
                </KBtn>

                <KBtn>
                    <span className="block">W</span>
                </KBtn>
                <KBtn>
                    <span className="block">E</span>
                </KBtn>
                <KBtn>
                    <span className="block">R</span>
                </KBtn>
                <KBtn>
                    <span className="block">T</span>
                </KBtn>
                <KBtn>
                    <span className="block">Y</span>
                </KBtn>
                <KBtn>
                    <span className="block">U</span>
                </KBtn>
                <KBtn>
                    <span className="block">I</span>
                </KBtn>
                <KBtn>
                    <span className="block">O</span>
                </KBtn>
                <KBtn>
                    <span className="block">P</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`{`}</span>
                    <span className="block">{`[`}</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`}`}</span>
                    <span className="block">{`]`}</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`|`}</span>
                    <span className="block">{`\\`}</span>
                </KBtn>
            </Row>
            {/* Fourth Row */}
            <Row>
                <KBtn
                    className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start">
                    caps lock
                </KBtn>
                <KBtn>
                    <span className="block">A</span>
                </KBtn>

                <KBtn>
                    <span className="block">S</span>
                </KBtn>
                <KBtn>
                    <span className="block">D</span>
                </KBtn>
                <KBtn>
                    <span className="block">F</span>
                </KBtn>
                <KBtn>
                    <span className="block">G</span>
                </KBtn>
                <KBtn>
                    <span className="block">H</span>
                </KBtn>
                <KBtn>
                    <span className="block">J</span>
                </KBtn>
                <KBtn>
                    <span className="block">K</span>
                </KBtn>
                <KBtn>
                    <span className="block">L</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`:`}</span>
                    <span className="block">{`;`}</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`"`}</span>
                    <span className="block">{`'`}</span>
                </KBtn>
                <KBtn
                    className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end">
                    return
                </KBtn>
            </Row>
            {/* Fifth Row */}
            <Row>
                <KBtn
                    className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start">
                    shift
                </KBtn>
                <KBtn>
                    <span className="block">Z</span>
                </KBtn>
                <KBtn>
                    <span className="block">X</span>
                </KBtn>
                <KBtn>
                    <span className="block">C</span>
                </KBtn>
                <KBtn>
                    <span className="block">V</span>
                </KBtn>
                <KBtn>
                    <span className="block">B</span>
                </KBtn>
                <KBtn>
                    <span className="block">N</span>
                </KBtn>
                <KBtn>
                    <span className="block">M</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`<`}</span>
                    <span className="block">{`,`}</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`>`}</span>
                    <span className="block">{`.`}</span>
                </KBtn>{" "}
                <KBtn>
                    <span className="block">{`?`}</span>
                    <span className="block">{`/`}</span>
                </KBtn>
                <KBtn
                    className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end">
                    shift
                </KBtn>
            </Row>
            {/* sixth Row */}
            <Row>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <span className="block">fn</span>
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <IconWorld className="h-[6px] w-[6px]" />
                    </div>
                </KBtn>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <IconChevronUp className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">control</span>
                    </div>
                </KBtn>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <OptionKey className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">option</span>
                    </div>
                </KBtn>
                <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <IconCommand className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">command</span>
                    </div>
                </KBtn>
                <KBtn className="w-[8.2rem]"></KBtn>
                <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-start w-full pl-1">
                        <IconCommand className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">command</span>
                    </div>
                </KBtn>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-start w-full pl-1">
                        <OptionKey className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">option</span>
                    </div>
                </KBtn>
                <div
                    className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
                    <KBtn className="w-6 h-3">
                        <IconCaretUpFilled className="h-[6px] w-[6px]" />
                    </KBtn>
                    <div className="flex">
                        <KBtn className="w-6 h-3">
                            <IconCaretLeftFilled className="h-[6px] w-[6px]" />
                        </KBtn>
                        <KBtn className="w-6 h-3">
                            <IconCaretDownFilled className="h-[6px] w-[6px]" />
                        </KBtn>
                        <KBtn className="w-6 h-3">
                            <IconCaretRightFilled className="h-[6px] w-[6px]" />
                        </KBtn>
                    </div>
                </div>
            </Row>
        </div>)
    );
};