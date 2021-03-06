import styled from "styled-components/native";

import { styles } from "../../../styles/global";

export const Container = styled.View`
  flex: 1;
  background: ${styles.colors.background};
  padding: 16px;
`;

export const Separator = styled.View`
  height: 1px;
  background: ${styles.colors.line};
  width: 100%;
  margin: 10px 0;
`;

// PlanCard

type PlanCardProps = {
  selected: boolean;
};

export const PlanCardContainer = styled.TouchableOpacity<PlanCardProps>`
  background: ${(props) => (props.selected ? styles.colors.opaqueGreen : styles.colors.input)};
  border: 1px solid ${(props) => (props.selected ? styles.colors.green : styles.colors.input)};
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PlanCardTitle = styled.Text`
  font-family: ${styles.fonts.epilogueMedium};
  font-size: 14px;
  color: ${styles.colors.text};
`;

export const PlanCardText = styled.Text`
  font-family: ${styles.fonts.epilogueRegular};
  font-size: 14px;
  color: ${styles.colors.text};
  line-height: 22px;
`;

export const PlanCardIndex = styled.Text`
  font-family: ${styles.fonts.epilogueMedium};
  font-size: 10px;
  color: ${styles.colors.green};
  align-self: flex-end;
  margin-top: 8px;
`;
