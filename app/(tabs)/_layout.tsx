import { Tabs } from "expo-router";
import { BookmarkIcon, Home, User } from "lucide-react-native";

export default function _layout () {
    return (
      <Tabs

          screenOptions={{
              tabBarShowLabel: true,
              tabBarStyle:
                  {backgroundColor: 'black',
                    // paddingTop: 8,
                    //   borderRadius: 70
                  },
              tabBarItemStyle: {
                  // borderRadius: 15,
                  // borderColor: 'cyan',
                  // borderWidth: 1,
              }
          }}
      >
          <Tabs.Screen name='index' options={{
              title: 'Home',
              headerShown: true,
              tabBarIcon: ({focused}) => (<Home  color={`${focused ? '#1377FF' : 'white'}`} />)
          }} />
          {/* <Tabs.Screen name='search' options={{
              title: 'Search',
              headerShown: true,
              tabBarIcon: ({focused}) => (<Search color={`${focused ? '#1377FF' : 'white'}`} />)

          }} /> */}

          <Tabs.Screen name='favourites' options={{
              title: 'Favourites',
              headerShown: true,
              tabBarIcon: ({focused}) => (<BookmarkIcon color={`${focused ? '#1377FF' : 'white'}`} />)

          }} />

          <Tabs.Screen name='account' options={{
              title: 'Account',
              headerShown: true,
              tabBarIcon: ({focused}) => (<User color={`${focused ? '#1377FF' : 'white'}`} />)

          }} />

      </Tabs>
    )
}