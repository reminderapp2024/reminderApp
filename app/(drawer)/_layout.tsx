import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: "Home",
        drawerLabel: "Home",
        drawerIcon: ({ size, color }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="settings"
      options={{
        headerTitle: "Settings",
        drawerLabel: "Settings",
        drawerIcon: ({ size, color }) => (
          <Ionicons name="cog-outline" size={size} color={color} />
        ),
      }}
    />
  </Drawer>
);

export default DrawerLayout;
