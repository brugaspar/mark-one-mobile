import { Dimensions } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

import { Button } from "../components/Button";

import { Dashboard } from "../screens/Dashboard";
import { User } from "../screens/User";
import { Member } from "../screens/Member";

import { styles } from "../styles/global";
import { expo } from "../../app.json";
import { useAuth } from "../contexts/AuthContext";

import logo from "../../assets/icon.png";

const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  const { signOut } = useAuth();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: Dimensions.get("window").width / 2,
        drawerStyle: {
          backgroundColor: styles.colors.background,
          borderRightWidth: 1,
          borderColor: styles.colors.input,
        },
        drawerLabelStyle: {
          fontFamily: styles.fonts.epilogueRegular,
          fontSize: 18,
          color: styles.colors.text,
        },
        drawerActiveTintColor: styles.colors.text,
        drawerInactiveTintColor: styles.colors.text,
        drawerActiveBackgroundColor: styles.colors.input,
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}>
            <Content>
              <CustomImage source={logo} resizeMode="contain" />
              <Separator />
              <DrawerItemList {...props} />
            </Content>
            <Footer>
              <Separator />
              <ButtonContainer>
                <Button title="Sair" background={styles.colors.red} onPress={signOut} />
              </ButtonContainer>
              <Separator />
              <AppVersion>{expo.version}</AppVersion>
            </Footer>
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Dashboard",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? "grid" : "grid-outline"} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Member"
        component={Member}
        options={{
          title: "Membros",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? "people" : "people-outline"} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="User"
        component={User}
        options={{
          title: "Usuários",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? "person" : "person-outline"} color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
    </Stack.Navigator>
  );
}

const Content = styled.View`
  margin-top: 10px;
`;

const CustomImage = styled.Image`
  height: 70px;
  width: 70px;
  align-self: center;
`;

const Separator = styled.View`
  height: 1px;
  background: ${styles.colors.line};
  margin: 10px 0;
`;

const Footer = styled.View`
  margin-bottom: 30px;
`;

const ButtonContainer = styled.View`
  padding: 0 16px;
`;

const AppVersion = styled.Text`
  font-family: ${styles.fonts.epilogueRegular};
  font-size: 14px;
  color: ${styles.colors.text};
  text-align: center;
`;