package music;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashSet;
import java.util.Set;

import javax.swing.filechooser.FileNameExtensionFilter;

import org.farng.mp3.MP3File;
import org.farng.mp3.TagException;
import org.farng.mp3.id3.AbstractID3;
import org.farng.mp3.id3.AbstractID3v2;
import org.farng.mp3.id3.ID3v1;

public class TagNameFileCopier {
	
	public static void TagNameFileCopyScanForPlaylists(String path){
		File[] files = new File(path).listFiles();
		for (File file : files){
			TagNameFileCopy(file.getAbsolutePath());
		}
	}
	
	public static void TagNameFileCopy(String playlistFile){
		String prefix = "E:\\";

		try {
			BufferedReader br = new BufferedReader(new FileReader(playlistFile));
			String line;
			while ((line = br.readLine()) != null) {
			   if (line.startsWith("Music")){
				   copyFileUsingStream(new File(prefix + line), new File(prefix+"prefix//" + line));
				   System.out.println(line);
			   }
			}
			br.close();
			
			System.out.println("DONE.");
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}
	
	private static void copyFileUsingStream(File source, File dest) throws IOException {
		if (dest.exists()){
			System.out.println("Exists....");
			return;
		}
		if (!source.exists()){
			System.out.println("NA.");
			return;
		}
		File directory = new File(dest.getParentFile().getAbsolutePath());
		directory.mkdirs();
	    InputStream is = null;
	    OutputStream os = null;
	    try {
	        is = new FileInputStream(source);
	        os = new FileOutputStream(dest);
	        byte[] buffer = new byte[1024];
	        int length;
	        while ((length = is.read(buffer)) > 0) {
	            os.write(buffer, 0, length);
	        }
	    } finally {
	        is.close();
	        os.close();
	    }
	}

	private static String toTagString(Set<String> tags) {
		String ret = "";
		for(String dashElem:tags){
			ret += " #" + dashElem;
		}
		return ret;
	}

	
	private static void getTagNames(AbstractID3 tag, Set<String> tags) {
		String tagNames[] = tag.getSongComment().split(" ");
		for(String dashElem:tagNames){
			if (dashElem.startsWith("#"))
				tags.add(dashElem.substring(1));
		}
	}

	public static void showFiles(File[] files) {
	    for (File file : files) {
	        if (file.isDirectory()) {
	            System.out.println("Directory: " + file.getName());
	            showFiles(file.listFiles()); // Calls same method again.
	            processDir(file);
	        } else {
	            System.out.println("File: " + file.getName());
	            processFile(file);
	        }
	    }
	}

	private static void processFile(File file) {
		// TODO Auto-generated method stub
		
	}

	private static void processDir(File file) {
		// TODO Auto-generated method stub
		
	}
	
}
