//import logo from "./logo.svg";
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  //Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View>
      <Card>
        {/* <Image src={logo} className="App-logo" alt="logo" /> */}
        <Heading level={1} className="App-header">ネットワーク監視サービス</Heading>
      </Card>
      <Button onClick={signOut} className="App-button">Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);