import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from 'react-navigation';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator({
  Search:SearchScreen,
  ResultsShow:ResultsShowScreen
  },{
    initialRouteName: "Search",
    defaultNavigationOptions:{
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);


  // npm install @react-navigation/native @react-navigation/stack

  // expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

  // npm install --save react-navigation

  // expo install react-native-gesture-handler react-native-reanimated react-navigation-stack

  // expo install react-native-safe-area-view react-native-safe-area-context

  // expo install @react-native-community/masked-view