const shuffle = (string: string): string => {
  const shuffleArray = string.split(',').sort(() => Math.random() - 0.5)
		.filter((item, index) => index < 8);
	
	return shuffleArray.join(',');
};

export default shuffle;