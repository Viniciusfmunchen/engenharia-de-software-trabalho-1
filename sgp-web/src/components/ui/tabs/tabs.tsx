import { messages } from '@/constants/messages';
import type { SxProps, Theme } from '@mui/material';
import type { ReactNode, SyntheticEvent } from 'react';
import { useId, useState } from 'react';

import { StyledTab, StyledTabPanel, StyledTabs, TabsHeader, TabsRoot } from './styles';

export interface AppTabItem {
  label: string;
  content: ReactNode;
  disabled?: boolean;
}

interface AppTabsProps {
  tabs: AppTabItem[];
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  ariaLabel?: string;
  panelSx?: SxProps<Theme>;
}

const Tabs = ({
  tabs,
  defaultValue = 0,
  value,
  onChange,
  ariaLabel = messages.tabs.navigation,
  panelSx,
}: AppTabsProps) => {
  const id = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);

  const currentValue = value ?? internalValue;

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <TabsRoot>
      <TabsHeader>
        <StyledTabs value={currentValue} onChange={handleChange} aria-label={ariaLabel}>
          {tabs.map((tab, index) => (
            <StyledTab
              key={tab.label}
              label={tab.label}
              iconPosition="start"
              disabled={tab.disabled}
              id={`${id}-tab-${index}`}
              aria-controls={`${id}-tabpanel-${index}`}
            />
          ))}
        </StyledTabs>
      </TabsHeader>

      {tabs.map((tab, index) => (
        <StyledTabPanel
          key={tab.label}
          role="tabpanel"
          hidden={currentValue !== index}
          id={`${id}-tabpanel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          sx={panelSx}
        >
          {currentValue === index && tab.content}
        </StyledTabPanel>
      ))}
    </TabsRoot>
  );
};

export default Tabs;
