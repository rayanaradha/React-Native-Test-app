import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'react-native';
import BottomNav from './BottomNav';
import HomePage from './HomePage';
import FirstPage from './Firstpage';
import SecondPage from './Secondpage';
import ThirdPage from './ThirdPage ';

export default function GoalPage() {
  const [page, setPage] = useState(0);
  function changePage(id) {
    setPage(id);
  }

  const pageRender = () => {
    switch (page) {
      case 0:
        return <HomePage />;
      case 1:
        return <FirstPage />;
      case 2:
        return <SecondPage />;
      case 3:
        return <ThirdPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.pageContainer}>{pageRender()}</View>
      <View style={styles.Navbar}>
        <BottomNav onChangePage={changePage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 9,
  },
  Navbar: {
    flex: 1,
    borderTopColor: '#512DA8',
    borderTopWidth: 0.3,
    marginTop: 10,
  },
});
