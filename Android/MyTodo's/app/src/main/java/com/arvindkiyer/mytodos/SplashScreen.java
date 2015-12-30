package com.arvindkiyer.mytodos;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class SplashScreen extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_screen);
        final Thread timer = new Thread(){
            public void run(){
                try{
                    sleep(3000);

                }catch (InterruptedException ie)
                {
                    ie.printStackTrace();

                }finally {
                    Intent start=new Intent("com.arvindkiyer.mytodos.Start");
                    startActivity(start);
                }
            };
        };

        timer.start();
    }
    @Override
    protected void onPause(){
        super.onPause();
        finish();
    }

}
