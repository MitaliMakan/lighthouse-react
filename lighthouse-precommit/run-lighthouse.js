const { execSync } = require('child_process');

try {
  // Run Lighthouse CI to get the performance scores
  const output = execSync('npx lhci autorun --config=.lighthouserc.json').toString();

  // Check the output for the performance score
  const performanceScore = output.match(/Performance score: (\d+\.\d+)/);
  
  if (performanceScore && parseFloat(performanceScore[1]) < 0.9) {
    console.error('Performance score is below 90%. Commit is blocked.');
    process.exit(1); // Non-zero exit code will block the commit
  }

  console.log('Lighthouse audit passed. Performance score is above 90%.');
  process.exit(0); // Zero exit code allows the commit
} catch (error) {
  console.error('Error running Lighthouse:', error.message);
  process.exit(1); // Exit with a non-zero code to block the commit
}
