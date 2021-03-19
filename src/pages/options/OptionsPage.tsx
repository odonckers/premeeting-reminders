import React, { FormEvent, FunctionComponent, useState } from "react"
import { PrimaryButton } from "@fluentui/react/lib/Button"
import {
  Dropdown,
  IDropdownOption,
  IDropdownStyles,
} from "@fluentui/react/lib/Dropdown"
import { timeIntervals } from "../../utils"
import "./Options.scss"

type OptionsPageProps = {}
type DropdownOption = IDropdownOption<{
  key: string
  text: string
}>

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: "50vh" },
  dropdownItemsWrapper: { maxHeight: "400px" },
}

export const OptionsPage: FunctionComponent = (props: OptionsPageProps) => {
  const meetingTimeOptions: DropdownOption[] = timeIntervals.map(
    (interval) => ({
      key: interval,
      text: interval,
    }),
  )
  const [selectedMeetingTime, setMeetingTime] = useState<DropdownOption>(
    meetingTimeOptions[12],
  )
  const onMeetingTimeChange = (
    event: FormEvent<HTMLDivElement>,
    option?: DropdownOption,
  ) => {
    if (option) {
      setMeetingTime(option)
    }
  }

  return (
    <div className="Options-Form">
      <Dropdown
        label="Meeting Time"
        selectedKey={selectedMeetingTime ? selectedMeetingTime.key : undefined}
        onChange={onMeetingTimeChange}
        placeholder="Select an option"
        options={meetingTimeOptions}
        styles={dropdownStyles}
      />
      <PrimaryButton
        href="https://reactjs.org"
        target="_blank"
        text="Standard-ish"
      />
    </div>
  )
}
