package music.spotify;


import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;

public class Main {

	public static void main(String[] args) throws IOException {
		new SpotifyInfoReader();
		System.in.read();
	}
}
