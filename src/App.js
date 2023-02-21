import "@aws-amplify/ui-react/styles.css";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  withAuthenticator,
  Button,
  View,
  Card,
  TextField
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  // データベースの条件値の値を設定する
  const isWithinLimit = '';
  return (
      <View>
        {/* アプリケーションのヘッダー */}
        <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    ネットワーク監視サービス
                  </Typography>
                  <Button color="inherit" onClick={signOut}>SignOut</Button>
                </Toolbar>
              </AppBar>
        </Box>

        {/* 条件値が超えている場合エラーメッセージが表示される */}
        <Card>
          <div>
            {isWithinLimit ?
              <Typography color="Blue">※ネットワークが正常通り。</Typography> :
              <Typography color="Red">※ワーニングがあります。</Typography> 
            }
          </div>
        </Card>
        
        <Card>
            <TextField id="outlined-basic" label="設定値" variant="outlined" />
        </Card>

        {/* Grafanaの表示画面へ移動する */}    
        <Card>
          <Button variant="contained" onClick={(e) => {
            window.open("http://13.113.48.181:3000/login", "_blank");
            }} color="blue">
              視覚化
          </Button>
        </Card>
        
      </View>
  );
}

export default withAuthenticator(App);