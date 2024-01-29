// src/app/api/get-balance/route.ts
import { forumChannelID } from '@lib/common/constants';
import { DiscordRequest } from '@utils/discord';
import { NextResponse } from 'next/server';
// 1196848175269544077 -> general
// 1196848143959077075 -> proposal
// 1196847949087522937 => forum channel ID
export async function GET() {
  try {
    // const channel = await DiscordRequest(`channels/1201165113542057985`, {
    //   method: 'DELETE',
    // });
    const channel = await DiscordRequest(`channels/${forumChannelID}`, {
      method: 'GET',
    });

    return NextResponse.json({ message: 'OK', status: 200, data: channel });
  } catch (e: any) {
    console.error({ e });
    return NextResponse.json({ error: 'something went wrong' });
  }
}
