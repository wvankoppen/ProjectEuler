package music.spotify;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Timer;
import java.util.TimerTask;

public class SpotifyInfoReader {
	
	public SpotifyInfoReader() {
		Timer t = new Timer();
		t.schedule(new SpotifyInfoReader.SpotifyReadTask(), 0, 1000);
	}

	public class SpotifyReadTask extends TimerTask {

		@Override
		public void run() {
			System.out.println("Tick3@!");
			
			try {
			    String line;
			    Process p = Runtime.getRuntime().exec(System.getenv("windir") +"\\system32\\tasklist.exe /fo csv /nh");
			    BufferedReader input = new BufferedReader(new InputStreamReader(p.getInputStream()));
			    while ((line = input.readLine()) != null) {
			        System.out.println(line); //<-- Parse data here.
			    }
			    input.close();
			} catch (Exception err) {
			    err.printStackTrace();
			}
			
		}
	}
}
