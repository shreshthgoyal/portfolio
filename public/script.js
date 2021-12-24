(function () {
    var headline = document.querySelector('.trigger-headline'),
				segmenter = new Segmenter(document.querySelector('.segmenter'), {
					onReady: function() {
           trigger = document.querySelector('.btn--trigger'),
							trigger.classList.remove('btn--hidden');
						trigger.addEventListener('click', function() {
			 				segmenter.animate();
							headline.classList.remove('trigger-headline--hidden');
							trigger.classList.add('btn--hidden');
              document.querySelector('.name').classList.add('ani');
              document.querySelector('.segmenter').classList.add('zoom');
						});
					}
				});
		})();