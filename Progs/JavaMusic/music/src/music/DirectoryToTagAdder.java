package music;

import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

import javax.swing.filechooser.FileNameExtensionFilter;

import org.farng.mp3.MP3File;
import org.farng.mp3.TagException;
import org.farng.mp3.id3.AbstractID3;
import org.farng.mp3.id3.AbstractID3v2;
import org.farng.mp3.id3.ID3v1;

public class DirectoryToTagAdder {

	// Used to auto-tag all files in a directory of a specific genre
	// Not needed anymore
	public static void DirectoryToTag(String tagName) {
		try {
			FilenameFilter filter = new FilenameFilter() {
			    public boolean accept(File dir, String name) {
			        return name.toLowerCase().endsWith(".mp3");
			    }};
			File[] files = new File("E:/Music/VA - " + Character.toUpperCase(tagName.charAt(0)) + tagName.substring(1)).listFiles(filter);
			for (File file : files){
				
				MP3File mp3File = new MP3File(file.getAbsolutePath());
				AbstractID3v2 tagv2 = mp3File.getID3v2Tag();
				ID3v1 tagv1 = mp3File.getID3v1Tag();
				if (tagv2 != null && tagv1 != null)
				{
					boolean modified = false;
					
					Set<String> tags = new HashSet<String>();
					getTagNames(tagv1, tags);
					getTagNames(tagv2, tags);
					
					tags.add(tagName);
					
					boolean notInV1 = !tagv1.getSongComment().contains("#" + tagName);
					boolean notInV2 = !tagv2.getSongComment().contains("#"  + tagName);
					
					if (notInV1 || notInV2){
						System.out.println(file.getName());
					}
					
					if (notInV1){
						String prevComment = tagv1.getSongComment();
						tagv1.setSongComment(toTagString(tags));
						mp3File.setID3v1Tag(tagv1);
						System.out.println("1    "+prevComment + "       ------>        "+tagv1.getSongComment());
						modified = true;
					}
					
					
					if (notInV2){
						if (!tagv2.getSongComment().contains("ÿþ")){
							String prevComment = tagv2.getSongComment();
							tagv2.setSongComment(toTagString(tags));
							System.out.println("2    "+prevComment + "       ------>        "+tagv2.getSongComment());
						}
						else {
							System.out.println("NOT SET");
						}
						
						mp3File.setID3v2Tag(tagv2);
						modified = true;
						
					}
					if (modified){
						mp3File.save();
						}
				}
				else
					System.out.println("tag = null");
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (TagException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
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

}