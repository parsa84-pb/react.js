from pytube import YouTube, 
# YouTube('https://www.youtube.com/watch?v=6mBO2vqLv38').streams.get_highest_resolution().download("Desktop")
ytt = YouTube('https://youtu.be/6mBO2vqLv38')
ytt.captions.get_by_language_code(lang_code='en').download(title="sub", output_path="Desktop")
