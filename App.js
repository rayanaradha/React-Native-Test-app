import GoalPage from './Goal App/components/GoalPage';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <LinearGradient
        colors={[
          'rgba(81, 45, 168, 0.2)',
          'rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)',
        ]}
        style={styles.Rootcontainer}
      >
        <GoalPage />
      </LinearGradient>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  Rootcontainer: {
    flex: 1,
  },
});
