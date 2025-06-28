import { useContext, useEffect, useState } from "react";
import CustomRadioGroup from "../CustomRadioGroup";
import { SectionHeading, StyledMenuItem, StyledSelect, TabHeading } from "../settings.styled";
import { UserContext } from "../../../contexts/UserContext";
import {
  BrightnessAutoRounded,
  DarkModeRounded,
  ExpandMoreRounded,
  LightModeRounded,
  PersonalVideoRounded,
} from "@mui/icons-material";
import type { DarkModeOptions } from "../../../types/user";
import { SelectChangeEvent } from "@mui/material";
import { OPTION_ICON_SIZE } from "../settingsConstants";
import type { OptionItem } from "../settingsTypes";
import CustomSwitch from "../CustomSwitch";
import { useSystemTheme } from "../../../hooks/useSystemTheme";
import { Themes } from "../../../theme/createTheme";
import { ColorElement } from "../../../styles";

const darkModeOptions: OptionItem<DarkModeOptions>[] = [
  {
    label: "Auto",
    value: "auto",
    icon: <BrightnessAutoRounded sx={{ fontSize: OPTION_ICON_SIZE }} />,
  },
  {
    label: "System",
    value: "system",
    icon: <PersonalVideoRounded sx={{ fontSize: OPTION_ICON_SIZE }} />,
  },
  {
    label: "Light",
    value: "light",
    icon: <LightModeRounded sx={{ fontSize: OPTION_ICON_SIZE }} />,
  },
  {
    label: "Dark",
    value: "dark",
    icon: <DarkModeRounded sx={{ fontSize: OPTION_ICON_SIZE }} />,
  },
];

export default function AppearanceTab() {
  const { user, setUser } = useContext(UserContext);
  const [darkModeValue, setDarkModeValue] = useState<DarkModeOptions>(user.darkmode);

  const systemTheme = useSystemTheme();

  useEffect(() => {
    setDarkModeValue(user.darkmode);
  }, [user.darkmode, user.emojisStyle]);

  const handleAppThemeChange = (event: SelectChangeEvent<unknown>) => {
    const selectedTheme = event.target.value as string;
    setUser((prevUser) => ({
      ...prevUser,
      theme: selectedTheme,
    }));
  };

  return (
    <>
      <TabHeading>Appearance</TabHeading>
      <SectionHeading>Dark Mode Options</SectionHeading>
      <CustomRadioGroup
        options={darkModeOptions}
        value={darkModeValue}
        onChange={(val) => {
          setDarkModeValue(val);
          setUser((prevUser) => ({
            ...prevUser,
            darkmode: val,
          }));
        }}
      />
      <SectionHeading>Theme Selection</SectionHeading>
      <StyledSelect
        value={user.theme}
        onChange={handleAppThemeChange}
        IconComponent={ExpandMoreRounded}
      >
        <StyledMenuItem value="system">
          <PersonalVideoRounded />
          &nbsp; System ({systemTheme === "dark" ? Themes[0].name : Themes[1].name})
        </StyledMenuItem>
        {Themes.map((theme) => (
          <StyledMenuItem key={theme.name} value={theme.name}>
            <ColorElement
              tabIndex={-1}
              clr={theme.MuiTheme.palette.primary.main}
              secondClr={theme.MuiTheme.palette.secondary.main}
              aria-label={`Change theme - ${theme.name}`}
              size="24px"
              disableHover
            />
            &nbsp;
            {theme.name}
          </StyledMenuItem>
        ))}
      </StyledSelect>
      <CustomSwitch
        settingKey="enableGlow"
        header="Enable Glow Effect"
        text="Add a soft glow to tasks for better visibility."
      />
    </>
  );
}
