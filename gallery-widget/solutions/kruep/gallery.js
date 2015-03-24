var galleryList = document.getElementById("galleryList");
var galleryArray = [
	'<a href="https://www.flickr.com/photos/nasacommons/9467783474" title="Female Computer by NASA on The Commons, on Flickr"><img src="https://farm8.staticflickr.com/7305/9467783474_f5fa3dc263_q.jpg" width="150" height="150" alt="Female Computer"></a>',
	'<a href="https://www.flickr.com/photos/nasacommons/9467782802" title="IBM Electronic Data Processing Machine by NASA on The Commons, on Flickr"><img src="https://farm3.staticflickr.com/2856/9467782802_33bc329fb4_q.jpg" width="150" height="150" alt="IBM Electronic Data Processing Machine"></a>',
	'<a href="https://www.flickr.com/photos/nasacommons/13066133373" title="Sheila Scott by NASA on The Commons, on Flickr"><img src="https://farm3.staticflickr.com/2460/13066133373_32d604c6eb_q.jpg" width="150" height="150" alt="Sheila Scott"></a>',
	'<a href="https://www.flickr.com/photos/smithsonian/8492314754" title="Barbara Kegerreis Lunde (b. 1937) by Smithsonian Institution, on Flickr"><img src="https://farm9.staticflickr.com/8091/8492314754_d410685761_q.jpg" width="150" height="150" alt="Barbara Kegerreis Lunde (b. 1937)"></a>',
	'<a href="https://www.flickr.com/photos/internetarchivebookimages/14741074286" title="Image from page 101 of &quot;[Course catalog]&quot; (1909) by Internet Archive Book Images, on Flickr"><img src="https://farm4.staticflickr.com/3883/14741074286_a1e0a7c475_q.jpg" width="150" height="150" alt="Image from page 101 of &quot;[Course catalog]&quot; (1909)"></a>',
	'<a href="https://www.flickr.com/photos/nasacommons/7538111898" title="Human Computers of 1947 by NASA on The Commons, on Flickr"><img src="https://farm9.staticflickr.com/8005/7538111898_41190907ea_q.jpg" width="150" height="150" alt="Human Computers of 1947"></a>',
	'<a href="https://www.flickr.com/photos/ul_digital_library/10922274335" title="Computers/word processors at NIHE (1) by Glucksman Library, on Flickr"><img src="https://farm8.staticflickr.com/7423/10922274335_b0a52da417_q.jpg" width="150" height="150" alt="Computers/word processors at NIHE (1)"></a>',
	'<a href="https://www.flickr.com/photos/nasacommons/9467782090" title="Analog Computing Machine in Fuel Systems Building by NASA on The Commons, on Flickr"><img src="https://farm4.staticflickr.com/3705/9467782090_fa4120cd4c_q.jpg" width="150" height="150" alt="Analog Computing Machine in Fuel Systems Building"></a>',
	'<a href="https://www.flickr.com/photos/nasacommons/9467782468" title="X-4 with Female Computer by NASA on The Commons, on Flickr"><img src="https://farm4.staticflickr.com/3685/9467782468_e0955d9444_q.jpg" width="150" height="150" alt="X-4 with Female Computer"></a>'
];

galleryList.innerHTML = "";
for (var i = 0; i < galleryArray.length; i++) {
	galleryList.innerHTML += "<li>" + galleryArray[i] + "</li>";
}