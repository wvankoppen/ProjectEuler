package music;

import java.io.BufferedReader;
import java.io.Console;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Set;

import javax.swing.filechooser.FileNameExtensionFilter;

import org.farng.mp3.MP3File;
import org.farng.mp3.TagException;
import org.farng.mp3.id3.AbstractID3;
import org.farng.mp3.id3.AbstractID3v2;
import org.farng.mp3.id3.ID3v1;

public class PlaylistBuilder {
	private static HashMap<String, ArrayList<String>> playlistPerTag = new HashMap<String, ArrayList<String>>(); 
	
	// Generate playlists for all tags that are found in the directory specified below, or if specified, for the artists.
	public static void BuildSubPlaylistFiles(String mainPlaylistFile, String[] artists){
		String prefix = "E:\\Playlists\\";
		
		try {
			BufferedReader br = new BufferedReader(new FileReader(mainPlaylistFile));
			String line;
			while ((line = br.readLine()) != null) {
			   if (line.startsWith("\\Music")){
				   	
				   	String filename = "E:" + line;
				   	
					MP3File mp3File;
					try {
						File file = new File(filename);
						if (!file.exists()){
							continue;
						}
						System.out.println("Reading tags from " + filename);
						if (artists == null) {
							// Build for all tags, not artist!
							mp3File = new MP3File(filename);
							ID3v1 tagv1 = mp3File.getID3v1Tag();
						   	AbstractID3v2 tagv2 = mp3File.getID3v2Tag();
						   	Set<String> tags = new HashSet<String>();
						   	getTagNames(tagv1, tags);
						    getTagNames(tagv2, tags);
						   
						    for (String tag : tags) {
						    	GetPlaylist(tag).add(filename);
							}
						} 
						else {
							// Build for a single artist!
							for (String artist : artists){
								if (filename.toLowerCase().contains(artist.toLowerCase())){
									GetPlaylist(artist).add(filename);
								}
							}
						}
						
					} catch (TagException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
						System.exit(0);
					}
				   	
			   }
			}
			br.close();
			
			preprocessTagLists("sens", "sensitive");
			preprocessTagLists("sensi", "sensitive");
			preprocessTagLists("sensit", "sensitive");
			preprocessTagLists("sensiti", "sensitive");
			preprocessTagLists("sensitiv", "sensitive");
			
			preprocessTagLists("danc", "dance");
			writePlaylists();
			
			
			
			System.out.println("DONE.");
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}

	private static void preprocessTagLists(String search, String replace) {
		if (playlistPerTag.containsKey(search)){
			GetPlaylist(replace).addAll(playlistPerTag.get(search));
			playlistPerTag.remove(search);
		}
		
	}

	private static void writePlaylists() throws IOException {
		for (String tag : playlistPerTag.keySet()) {
			 try {
		    	System.out.println("\n## " + tag + " (" + playlistPerTag.get(tag).size() + "):");
		    	FileWriter writer = new FileWriter("E:\\" + tag + ".m3u");
				for(String fileName : playlistPerTag.get(tag)){
					writer.write(fileName.replace("E:\\", "") + "\n");
				}
				writer.close();
			}
			 catch (FileNotFoundException e){
			System.out.println(e.getMessage());
			}
			 }
	}
	
	private static ArrayList<String> GetPlaylist(String tag){
		String tagLowerCase = tag.toLowerCase();
		if (!playlistPerTag.containsKey(tagLowerCase)){
			playlistPerTag.put(tagLowerCase, new ArrayList<String>());
		}
		
		return playlistPerTag.get(tagLowerCase);
	}
	

	
	private static void getTagNames(AbstractID3 tag, Set<String> tags) {
		if (tag == null)
			return;
		String tagNames[] = tag.getSongComment().split("#");
		for(String dashElem:tagNames){
			
				String tagElement = dashElem.trim(); 
				if (tagElement != null && !tagElement.isEmpty()){
					tags.add(tagElement);
				}
			
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
